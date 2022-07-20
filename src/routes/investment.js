const express = require('express');
const buyAssets = require('../controllers/investment');
const qtyValidator = require('../middlewares/assetsQuantityValidator');
const balanceForAssetsValidator = require('../middlewares/balanceForAssetsValidator');

const router = express.Router();

router.post(
  '/comprar',
  qtyValidator,
  balanceForAssetsValidator,
  buyAssets.buyAssets,
);

module.exports = router;
