const wallet = require('../models/wallet');

const walletById = async (idWallet) => {
  const balance = await wallet.clientWalletById(idWallet);
  return balance;
};
const deposit = async (idWallet, value) => {
  await wallet.deposit(idWallet, value);
  await wallet.history(idWallet, 'depósito', value);
  return { message: `Deposito de R$ ${value} realizado com sucesso na carteira ${idWallet}` };
};

const withdraw = async (idWallet, value) => {
  await wallet.withdraw(idWallet, value);
  await wallet.history(idWallet, 'saque', value);
  return { message: `Saque de R$ ${value} realizado com sucesso da carteira ${idWallet}` };
};

module.exports = {
  walletById,
  deposit,
  withdraw,
};
