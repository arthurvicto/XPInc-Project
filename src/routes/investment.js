const express = require('express');
const investment = require('../controllers/investment');
const bankAssetsValidator = require('../middlewares/bankAssetsValidator');
const clientWalletValidator = require('../middlewares/clientWalletValidator');
const quantityOfAssetsOnWallet = require('../middlewares/assetsQuantityOnWallet');
const idWalletValidator = require('../middlewares/idWalletValidator');
const idAssetValidator = require('../middlewares/idAssetValidator');

const router = express.Router();

router.post(
  '/comprar',
  idWalletValidator,
  idAssetValidator,
  bankAssetsValidator,
  clientWalletValidator,
  investment.buyAssets,
);
router.post(
  '/vender',
  idWalletValidator,
  idAssetValidator,
  quantityOfAssetsOnWallet,
  investment.sellAssets,
);

module.exports = router;
