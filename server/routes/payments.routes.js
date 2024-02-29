const { donateToAProjectById } = require("../controllers/payments.controller");
const router = require("express").Router();

router.post("/donate/:id", donateToAProjectById);

module.exports = router;
