const express = require("express");
const assets = require("./controllers/assets");
const newUser = require("./controllers/signUp");
const allClients = require("./controllers/clients");

const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("XPinc-API-Project");
});

app.get("/ativos", assets.allAssetsFromServices);
app.get("/ativos/:id", assets.assetsById);
app.post("/signup", newUser.createUser);
app.get("/clients", allClients.allClients);

module.exports = app;
