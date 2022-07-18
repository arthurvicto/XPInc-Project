const express = require("express");
const wallet = require("../controllers/wallet");
const router = express.Router();

router.get("/:id", wallet.clientBalance);
router.post("/deposito", wallet.deposit);
router.post("/saque", wallet.withdraw);

module.exports = router;
