const walletsById = require('../models/wallet');

module.exports = async (req, res, next) => {
  const { idClient } = req.body;
  const wallet = await walletsById.clientWalletByIdClient(idClient);
  if (wallet.length >= 3) {
    return res.status(400).json({ message: 'Você atingiu o limite de contas!' });
  }
  if (wallet.length === 0) {
    return res.status(400).json({ message: 'Cliente não encontrado!' });
  }
  if (idClient === undefined || idClient === null) {
    return res.status(400).json({ message: 'Código do cliente precisa ser definido' });
  }
  if (typeof idClient !== 'number') {
    return res.status(400).json({ message: 'Código do cliente precisa ser um número' });
  }

  return next();
};
