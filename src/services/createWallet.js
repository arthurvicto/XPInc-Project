const newWalletFromModels = require('../models/createWallet');

const newWallet = async (idClient) => {
  const wallet = await newWalletFromModels.createWallet(idClient);
  return { code: 200, message: 'Conta criado com sucesso!', wallet };
};

module.exports = {
  newWallet,
};
