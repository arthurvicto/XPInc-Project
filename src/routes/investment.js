const express = require('express');
const investment = require('../controllers/investment');
const bankAssetsValidator = require('../middlewares/bankAssetsValidator');
const clientWalletValidator = require('../middlewares/clientWalletValidator');
const quantityOfAssetsOnWallet = require('../middlewares/assetsQuantityOnWallet');

const router = express.Router();

router.post(
  '/comprar',
  bankAssetsValidator,
  clientWalletValidator,
  investment.buyAssets,
);
router.post(
  '/vender',
  quantityOfAssetsOnWallet,
  investment.sellAssets,
);

module.exports = router;
