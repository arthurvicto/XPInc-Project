const express = require("express");
const allClients = require("../controllers/clients");
const router = express.Router();

router.get("/", allClients.allClients);

module.exports = router;
