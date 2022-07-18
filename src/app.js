const express = require("express");
const assets = require("./controllers/assets");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("XPinc-API-Project");
});

app.get("/ativos", assets.allAssetsFromServices);
app.get("/ativos/:id", assets.assetsById);

module.exports = app;
