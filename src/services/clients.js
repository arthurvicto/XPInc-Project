const clientsFromModels = require('../models/clients');
const newToken = require('../jwt/jwt');

const allClients = async () => {
  const clients = await clientsFromModels.allClients();
  if (clients.length === 0) {
    return ({ code: 400, message: 'Sem clientes disponíveis' });
  }
  return ({ code: 200, message: clients });
};

const login = async (email) => {
  const token = newToken.generateJWTToken(email);
  return ({ code: 200, message: token });
};

module.exports = {
  allClients,
  login,
};
