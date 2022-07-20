const wallet = require('../models/wallet');

const clientBalance = async (idWallet) => {
  const balance = await wallet.balance(idWallet);
  return balance;
};
const deposit = async (idWallet, value) => {
  await wallet.deposit(idWallet, value);
  await wallet.history(idWallet, 'depósito', value);
  return { message: `Deposito de R$ ${value} realizado com sucesso` };
};

const withdraw = async (idWallet, value) => {
  await wallet.withdraw(idWallet, value);
  await wallet.history(idWallet, 'saque', value);
  return { message: `Saque de R$ ${value} realizado com sucesso` };
};

module.exports = {
  clientBalance,
  deposit,
  withdraw,
};
