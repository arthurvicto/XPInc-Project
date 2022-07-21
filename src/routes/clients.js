const express = require('express');
const clients = require('../controllers/clients');
const loginValidator = require('../middlewares/loginValidator');

const router = express.Router();

router.get('/', clients.allClients);
router.post(
  '/login',
  loginValidator,
  clients.login,
);

module.exports = router;
