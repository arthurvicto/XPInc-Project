const express = require("express");
const newUser = require("../controllers/signUp");
const router = express.Router();

router.post("/", newUser.createUser);

module.exports = router;
