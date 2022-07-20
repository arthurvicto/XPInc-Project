const express = require('express');
const investment = require('../controllers/investment');
const quantityOfAssetsOnBank = require('../middlewares/assetsQuantityValidator');
const balanceForAssetsValidator = require('../middlewares/balanceForAssetsValidator');
const quantityOfAssetsOnWallet = require('../middlewares/assetsQuantityOnWallet');

const router = express.Router();

router.post(
  '/comprar',
  quantityOfAssetsOnBank,
  balanceForAssetsValidator,
  investment.buyAssets,
);
router.post(
  '/vender',
  quantityOfAssetsOnWallet,
  investment.sellAssets,
);

module.exports = router;
