const { authenticateToken } = require('../jwt/jwt');
const clients = require('../models/clients');

module.exports = async (req, res, next) => {
  const { idWallet } = req.body;
  const token = req.headers.authorization;
  const clientToken = authenticateToken(token);
  const emailByToken = clientToken.email;
  const idClient = await clients.idClientByEmail(emailByToken);
  const clientWallets = await clients.walletsByIdClient(idClient.idClient);
  if (!clientWallets) {
    return res.status(401).json({ message: 'Token expirado!' });
  }
  const onlyWallets = clientWallets.map((wallet) => wallet.idWallet);
  const wallet = onlyWallets.find((element) => element === idWallet);

  if (!wallet) {
    return res.status(401).json({ message: 'Não autorizado a fazer transação' });
  }

  return next();
};
