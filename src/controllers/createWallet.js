const newWalletFromServices = require('../services/createWallet');

const newWallet = async (req, res) => {
  const { id } = req.params;
  const wallet = await newWalletFromServices.newWallet(id);
  res.status(wallet.code).json(wallet.message);
};

module.exports = {
  newWallet,
};
