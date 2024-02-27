const router = require("express").Router();
const {
  createNewCampaign,
  deleteCampaign,
  editCampaign,
  getAllCampaigns,
  getCampaignById,
} = require("../controllers/campaign.controller");

// Create a new campaign
router.post("/create", createNewCampaign);

// Delete a campaign
router.delete("/:campaignId", deleteCampaign);

// Edit a campaign
router.put("/:campaignId", editCampaign);

// Get all campaigns
router.get("/", getAllCampaigns);

// Get a campaign by ID
router.get("/:campaignId", getCampaignById);

module.exports = router;
