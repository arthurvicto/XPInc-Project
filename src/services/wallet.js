const wallet = require("../models/wallet");

const clientBalance = async (idWallet) => {
  const balance = await wallet.balance(idWallet);
  return balance;
};
const deposit = async (idWallet, value) => {
  const balance = await wallet.deposit(idWallet, value);
  return balance;
};

module.exports = {
  clientBalance,
  deposit,
};
