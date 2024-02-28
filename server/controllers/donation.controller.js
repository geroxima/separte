const Campaign = require("../models/campaign.model");
const Donation = require("../models/donations.model");
const User = require("../models/user.model");

// Create a new donation
const createDonation = async (req, res) => {
  try {
    // Get the campaign ID from the request body
    const { campaignId } = req.body;

    // Find the campaign by ID
    const campaign = await Campaign.findById(campaignId);

    // If the campaign doesn't exist, return an error
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    const user = req.user.username;

    const newDonation = {
      ...req.body,
      donorName: user,
      campaignId,
    };
    // Create a new donation
    const donation = new Donation(newDonation);

    // Save the donation
    await donation.save();

    // Add the donation to the campaign's donations array
    campaign.donations.push(donation._id);

    // Save the updated campaign
    await campaign.save();

    // Return the created donation
    res.status(201).json(donation);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: "Server error" });
  }
};

// Get all donations
const getAllDonations = async (req, res) => {
  try {
    // Find all donations
    const donations = await Donation.find();

    // Return the donations
    res.json(donations);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: "Server error" });
  }
};

// Get donations by campaign ID
const getDonationsByCampaignId = async (req, res) => {
  try {
    // Get the campaign ID from the request parameters
    const { campaignId } = req.params;

    // Find the campaign by ID
    const campaign = await Campaign.findById(campaignId);

    // If the campaign doesn't exist, return an error
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    // Find all donations for the campaign
    const donations = await Donation.find({ campaign: campaignId });

    // Return the donations
    res.json(donations);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: "Server error" });
  }
};

// Remove donations by campaign ID
const removeDonationsByCampaignId = async (req, res) => {
  try {
    // Get the campaign ID from the request parameters
    const { campaignId } = req.params;

    // Find the campaign by ID
    const campaign = await Campaign.findById(campaignId);

    // If the campaign doesn't exist, return an error
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    // Remove all donations for the campaign
    await Donation.deleteMany({ campaign: campaignId });

    // Return a success message
    res.json({ message: "Donations removed successfully" });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createDonation,
  getAllDonations,
  getDonationsByCampaignId,
  removeDonationsByCampaignId,
};
