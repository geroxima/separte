const router = require("express").Router();
const {
  createNewCampaign,
  deleteCampaign,
  editCampaign,
  getAllCampaigns,
  getCampaignById,
  getCampaignDonationsById,
} = require("../controllers/campaign.controller");
const { isAuthenticatedUser } = require("../middlewares/auth");
// Create a new campaign
router.post("/create", isAuthenticatedUser, createNewCampaign);

// Delete a campaign
router.delete("/:campaignId", deleteCampaign);

// Edit a campaign
router.put("/:campaignId", editCampaign);

// Get all campaigns
router.get("/", getAllCampaigns);

// Get a campaign by ID
router.get("/:campaignId", getCampaignById);

// Get donations of a specific campaign
router.get("/:campaignId/donations", getCampaignDonationsById);
module.exports = router;
