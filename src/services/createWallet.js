const newWalletFromModels = require('../models/createWallet');

const newWallet = async (idClient) => {
  const wallet = await newWalletFromModels.createWallet(idClient);
  return { code: 200, message: `Conta de código ${wallet} criado com sucesso!` };
};

module.exports = {
  newWallet,
};
