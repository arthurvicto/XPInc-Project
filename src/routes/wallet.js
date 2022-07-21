const express = require('express');
const wallet = require('../controllers/wallet');
const assets = require('../controllers/clientAssets');
const idWallet = require('../middlewares/idWallet');

const router = express.Router();

router.get('/:idWallet', wallet.clientBalance);
router.post('/deposito', wallet.deposit);
router.post('/saque', wallet.withdraw);
router.get(
  '/ativos/:idWallet',
  idWallet,
  assets.clientAssets,
);

module.exports = router;
