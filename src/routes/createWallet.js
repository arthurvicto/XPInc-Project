const express = require('express');
const newWallet = require('../controllers/createWallet');
const createWalletValidator = require('../middlewares/createWalletValidator');
const tokenAuth = require('../middlewares/tokenAuth');

const router = express.Router();

router.post(
  '/',
  tokenAuth,
  createWalletValidator,

  newWallet.newWallet,
);

module.exports = router;
