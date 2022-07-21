const express = require('express');
const newUser = require('../controllers/signUp');
const signUpValidator = require('../middlewares/signUpValidator');

const router = express.Router();

router.post(
  '/',
  signUpValidator,
  newUser.createUser,
);

module.exports = router;
