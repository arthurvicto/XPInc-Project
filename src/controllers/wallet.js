const wallet = require("../services/wallet");

const clientBalance = async (req, res) => {
  const { id } = req.params;
  const balance = await wallet.clientBalance(id);
  res.status(200).json(balance);
};

const deposit = async (req, res) => {
  const { id, value } = req.body;
  const balance = await wallet.deposit(id, value);
  res.status(200).json(balance);
};

module.exports = {
  clientBalance,
  deposit,
};
