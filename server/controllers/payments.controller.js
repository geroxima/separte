const Stripe = require("stripe");
const Campaign = require("../models/campaign.model");
const Donation = require("../models/donations.model");
const stripe = new Stripe(process.env.STRIPE_SECRET);
const endpointSecret = "whsec_HdagJNZPNv4XBJ26xeTVEf1fm5VcOpq6";

async function donateToAProjectById(req, res) {
  const { amount } = req.body;

  const user = req.user;
  const projectId = req.params.id;

  console.log(amount, projectId);
  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000/success",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Donation to a project",
            images: ["https://via.placeholder.com/150"],
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    metadata: {
      campaignId: projectId,
      donorName: user.name,
      currency: "gs",
    },
    mode: "payment",
  });

  res.json(session);
}

async function donationWebhook(req, res) {
  const signature = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      signature,
      endpointSecret
    );
  } catch (err) {
    console.log(err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      const campaignId = session.metadata.campaignId;
      const campaign = await Campaign.findById(campaignId);

      if (!campaign) {
        console.log("Campaign not found");
        return;
      }

      const newDonation = new Donation({
        amount: session.amount_total,
        campaignId: campaignId,
        donorName: session.metadata.donorName,
        currency: session.metadata.currency,
        paymentMethod: "credit card",
        donationType: "donation",
      });

      await newDonation.save();

      await Campaign.findByIdAndUpdate(campaignId, {
        $inc: { currentAmount: session.amount_total },
      });

      campaign.donations.push(newDonation._id);

      await campaign.save();

      // Fulfill the purchase...
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  res.json({ received: true });
}

module.exports = {
  donateToAProjectById,
  donationWebhook,
};
