const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const clientsRouter = require('./routes/clients');
const newWalletRouter = require('./routes/createWallet');
const assetsRouter = require('./routes/assets');
const signUpRouter = require('./routes/signUp');
const walletRouter = require('./routes/wallet');
const investmentRouter = require('./routes/investment');
const { swaggerConfig } = require('./docs/swagger.config');
require('express-async-errors');

const app = express();

app.use(express.json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (req, res) => {
  res.send('XPinc-API-Project');
});

app.use('/ativos', assetsRouter);
app.use('/cadastro', signUpRouter);
app.use('/cliente', clientsRouter);
app.use('/criarCarteira', newWalletRouter);
app.use('/conta', walletRouter);
app.use('/investimento', investmentRouter);

module.exports = app;
