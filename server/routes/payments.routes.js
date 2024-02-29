const {
  donateToAProjectById,
  donationWebhook,
} = require("../controllers/payments.controller");
const { isAuthenticatedUser } = require("../middlewares/auth");
const router = require("express").Router();

router.post("/donate/:id", isAuthenticatedUser, donateToAProjectById);
router.post("/webhook", donationWebhook);

module.exports = router;
