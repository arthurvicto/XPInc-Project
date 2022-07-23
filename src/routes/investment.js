const express = require('express');
const investment = require('../controllers/investment');
const bankAssetsValidator = require('../middlewares/bankAssetsValidator');
const clientWalletValidator = require('../middlewares/clientWalletValidator');
const quantityOfAssetsOnWallet = require('../middlewares/assetsQuantityOnWallet');
const idWalletValidator = require('../middlewares/idWalletValidator');
const idAssetValidator = require('../middlewares/idAssetValidator');
const qtdeParamsValidator = require('../middlewares/qtdeParamsValidator');
const tokenAuth = require('../middlewares/tokenAuth');
const authTokenTransactions = require('../middlewares/authTokenTransactions');

const router = express.Router();

router.post(
  '/comprar',
  tokenAuth,
  idWalletValidator,
  authTokenTransactions,
  idAssetValidator,
  qtdeParamsValidator,
  bankAssetsValidator,
  clientWalletValidator,
  investment.buyAssets,
);
router.post(
  '/vender',
  tokenAuth,
  idWalletValidator,
  authTokenTransactions,
  idAssetValidator,
  qtdeParamsValidator,
  quantityOfAssetsOnWallet,
  investment.sellAssets,
);

module.exports = router;
