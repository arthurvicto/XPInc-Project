const express = require('express');
const clientsRouter = require('./routes/clients');
const newWalletRouter = require('./routes/createWallet');
const assetsRouter = require('./routes/assets');
const signUpRouter = require('./routes/signUp');
const walletRouter = require('./routes/wallet');
const investmentRouter = require('./routes/investment');
require('express-async-errors');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('XPinc-API-Project');
});

app.use('/ativos', assetsRouter);
app.use('/signup', signUpRouter);
app.use('/clients', clientsRouter);
app.use('/createwallet', newWalletRouter);
app.use('/conta', walletRouter);
app.use('/investimento', investmentRouter);

module.exports = app;
