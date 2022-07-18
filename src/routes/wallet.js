const express = require("express");
const wallet = require("../controllers/wallet");
const assets = require("../controllers/clientAssets");
const router = express.Router();

router.get("/:id", wallet.clientBalance);
router.post("/deposito", wallet.deposit);
router.post("/saque", wallet.withdraw);
router.get("/ativos/:id", assets.clientAssets);

module.exports = router;
