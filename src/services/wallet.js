const walletBalance = require("../models/wallet");

const clientBalance = async (idWallet) => {
  const balance = await walletBalance.balance(idWallet);
  return balance;
};

module.exports = {
  clientBalance,
};
