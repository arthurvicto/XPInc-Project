const wallet = require('../services/wallet');

const clientBalance = async (req, res) => {
  const { idWallet } = req.params;
  const balance = await wallet.clientBalance(idWallet);
  res.status(200).json(balance);
};

const deposit = async (req, res) => {
  const { idWallet, value } = req.body;
  const result = await wallet.deposit(idWallet, value);
  res.status(200).json({ message: result.message });
};

const withdraw = async (req, res) => {
  const { idWallet, value } = req.body;
  const result = await wallet.withdraw(idWallet, value);
  return res.status(200).json({ message: result.message });
};

module.exports = {
  clientBalance,
  deposit,
  withdraw,
};
