const newWalletFromServices = require('../services/createWallet');

const newWallet = async (req, res) => {
  const { idClient } = req.body;
  const wallet = await newWalletFromServices.newWallet(idClient);
  res.status(wallet.code).json({ message: wallet.message });
};

module.exports = {
  newWallet,
};
