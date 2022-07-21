const wallet = require('../models/wallet');

module.exports = async (req, res, next) => {
  const { idWallet } = req.params;
  const clientWallet = await wallet.clientWalletById(idWallet);
  if (idWallet <= 0) {
    return res.status(400).json({
      message: 'O código da carteira deve ser maior que zero',
    });
  }
  if (idWallet === undefined || idWallet === null || !idWallet) {
    return res.status(400).json({
      message: 'O código da carteira deve ser informado',
    });
  }
  if (clientWallet === null || clientWallet === undefined) {
    return res.status(404).json({
      message: 'Carteira não encontrada',
    });
  }
  return next();
};
