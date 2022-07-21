const express = require('express');
const wallet = require('../controllers/wallet');
const assets = require('../controllers/clientAssets');
const idWallet = require('../middlewares/idWallet');
const walletValidator = require('../middlewares/idWalletValidator');
const valueValidator = require('../middlewares/valueValidator');
const balanceForWithdraw = require('../middlewares/balanceForWithdraw');

const router = express.Router();

router.get('/:idWallet', idWallet, wallet.clientBalance);
router.post('/deposito', walletValidator, valueValidator, wallet.deposit);
router.post('/saque', walletValidator, balanceForWithdraw, valueValidator, wallet.withdraw);
router.get(
  '/ativos/:idWallet',
  idWallet,
  assets.clientAssets,
);

module.exports = router;
