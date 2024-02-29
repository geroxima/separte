const Campaign = require("../models/campaign.model");
const Donation = require("../models/donations.model");
const User = require("../models/user.model");

// Create a new campaign
const createNewCampaign = async (req, res) => {
  try {
    const fundraiserName = req.user.username;
    const campaign = new Campaign({ ...req.body, fundraiserName });
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a campaign
const deleteCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;
    await Campaign.findByIdAndDelete(campaignId);
    await Donation.deleteMany({ campaign: campaignId });
    res.status(200).json({ message: "Campaign deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Edit a campaign
const editCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;

    const updatedCampaign = await Campaign.findByIdAndUpdate(
      campaignId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCampaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all campaigns
const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();

    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get campaign by ID
const getCampaignById = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const campaign = await Campaign.findById(campaignId);
    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCampaignDonationsById = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const donations = await Donation.find({ campaignId: campaignId });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCampaignDonationsById,
  createNewCampaign,
  deleteCampaign,
  editCampaign,
  getAllCampaigns,
  getCampaignById,
};
