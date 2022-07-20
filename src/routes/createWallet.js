const express = require('express');
const newWallet = require('../controllers/createWallet');

const router = express.Router();

router.get('/:id', newWallet.newWallet);

module.exports = router;
