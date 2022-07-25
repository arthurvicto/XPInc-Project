const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'XPInc-Project API',
      description: 'API documentation for XPInc-Project',
      version: '1.0',
    },
    servers: [{
      url: 'https://xpinc-projec-back-end.herokuapp.com',
      description: 'DB- heroku',
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/index.js', './src/routes/assets.js', './src/routes/clients.js',
    './src/routes/createWallet.js', './src/routes/investment.js', './src/routes/signUp.js',
    './src/routes/wallet.js'],
};

module.exports = {
  swaggerConfig,
};
