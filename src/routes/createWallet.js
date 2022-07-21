const express = require('express');
const newWallet = require('../controllers/createWallet');
const createWalletValidator = require('../middlewares/createWalletValidator');

const router = express.Router();

router.post('/:idClient', createWalletValidator, newWallet.newWallet);

module.exports = router;
