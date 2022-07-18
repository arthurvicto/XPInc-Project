const express = require("express");
const wallet = require("../controllers/wallet");
const router = express.Router();

router.get("/:id", wallet.clientBalance);

module.exports = router;
