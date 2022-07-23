const express = require('express');
const wallet = require('../controllers/wallet');
const assets = require('../controllers/clientAssets');
const idWallet = require('../middlewares/idWallet');
const walletValidator = require('../middlewares/idWalletValidator');
const valueValidator = require('../middlewares/valueValidator');
const balanceForWithdraw = require('../middlewares/balanceForWithdraw');
const tokenAuth = require('../middlewares/tokenAuth');
const authTokenTransactions = require('../middlewares/authTokenTransactions');

const router = express.Router();

router.get(
  '/:idWallet',
  tokenAuth,
  idWallet,
  wallet.clientBalance,
);
router.post(
  '/deposito',
  tokenAuth,
  authTokenTransactions,
  walletValidator,
  valueValidator,
  wallet.deposit,
);
router.post(
  '/saque',
  tokenAuth,
  authTokenTransactions,
  walletValidator,
  balanceForWithdraw,
  valueValidator,
  wallet.withdraw,
);
router.get(
  '/ativos/:idWallet',
  tokenAuth,
  idWallet,
  assets.clientAssets,
);

module.exports = router;
