const walletBalance = require("../services/wallet");

const clientBalance = async (req, res) => {
  const { id } = req.params;
  const balance = await walletBalance.clientBalance(id);
  res.status(200).json(balance);
};

module.exports = {
  clientBalance,
};
