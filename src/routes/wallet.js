const express = require("express");
const wallet = require("../controllers/wallet");
const router = express.Router();

router.get("/:id", wallet.clientBalance);
router.post("/deposito", wallet.deposit);

module.exports = router;
