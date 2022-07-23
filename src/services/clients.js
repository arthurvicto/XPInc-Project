const clientsFromModels = require('../models/clients');
const newToken = require('../jwt/jwt');

const allClients = async () => {
  const clients = await clientsFromModels.allClients();
  if (clients.length === 0) {
    return ({ code: 400, message: 'Sem clientes disponíveis' });
  }
  return ({ code: 200, message: clients });
};

const login = async (email, password) => {
  const clientToken = newToken.generateJWTToken(email);
  const idClientByLogin = await clientsFromModels.login(email, password);
  const { idClient } = idClientByLogin;
  const wallets = await clientsFromModels.walletsByIdClient(idClient);
  const onlyWallets = wallets.map((wallet) => wallet.idWallet);
  return ({ token: clientToken, wallets: onlyWallets });
};

module.exports = {
  allClients,
  login,
};
