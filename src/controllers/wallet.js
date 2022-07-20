const wallet = require('../services/wallet');

const clientBalance = async (req, res) => {
  const { id } = req.params;
  const balance = await wallet.clientBalance(id);
  res.status(200).json(balance);
};

const deposit = async (req, res) => {
  const { id, value } = req.body;
  const result = await wallet.deposit(id, value);
  res.status(200).json(result.message);
};

const withdraw = async (req, res) => {
  const { id, value } = req.body;
  const balance = await wallet.clientBalance(id);
  if (balance.balance < value) {
    return res.status(200).json('Saldo insuficiente');
  }
  const result = await wallet.withdraw(id, value);
  return res.status(200).json(result.message);
};

module.exports = {
  clientBalance,
  deposit,
  withdraw,
};
