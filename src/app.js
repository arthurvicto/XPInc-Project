const express = require("express");

const clientsRouter = require("./routes/clients");
const walletRouter = require("./routes/createWallet");
const assetsRouter = require("./routes/assets");
const signUpRouter = require("./routes/signUp");

const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("XPinc-API-Project");
});

app.use("/ativos", assetsRouter);
app.use("/signup", signUpRouter);
app.use("/clients", clientsRouter);
app.use("/createwallet", walletRouter);

module.exports = app;
