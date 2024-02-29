const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET);

async function donateToAProjectById(req, res) {
  const { amount } = req.body;

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
    },
    mode: "payment",
  });

  res.json(session);
}

module.exports = {
  donateToAProjectById,
};
