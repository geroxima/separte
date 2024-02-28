const router = require("express").Router();
const {
  createDonation,

  getAllDonations,
  getDonationsByCampaignId,
  removeDonationsByCampaignId,
} = require("../controllers/donation.controller");

// Create a new donation
router.post("/", createDonation);

// Get all donations
router.get("/", getAllDonations);

// Remove all donations of a campaign
router.delete("/:campaignId", removeDonationsByCampaignId);
// Get a donation by ID
router.get("/:campaignId", getDonationsByCampaignId);

module.exports = router;
