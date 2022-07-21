const wallet = require('../services/wallet');

module.exports = async (req, res, next) => {
  const { idWallet, value } = req.body;
  const walletById = await wallet.walletById(idWallet);
  if (walletById.balance < value) {
    return res.status(400).json({ message: 'Saldo insuficiente' });
  }
  return next();
};
