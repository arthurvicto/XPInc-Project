const express = require("express");
const newWallet = require("../controllers/createWallet");
const router = express.Router();

router.post("/:id", newWallet.newWallet);

module.exports = router;
