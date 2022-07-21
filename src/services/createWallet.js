const newWalletFromModels = require('../models/createWallet');

const newWallet = async (id) => {
  const wallet = await newWalletFromModels.createWallet(id);
  return { code: 200, message: 'Conta criado com sucesso!', wallet };
};

module.exports = {
  newWallet,
};
