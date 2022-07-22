const express = require('express');
const clients = require('../controllers/clients');
const loginValidator = require('../middlewares/loginValidator');
const tokenAuth = require('../middlewares/tokenAuth');

const router = express.Router();

router.get('/', clients.allClients);
router.post(
  '/login',
  tokenAuth,
  loginValidator,
  clients.login,
);

module.exports = router;
