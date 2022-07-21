const clientsFromModels = require('../models/clients');

const allClients = async () => {
  const clients = await clientsFromModels.allClients();
  if (clients.length === 0) {
    return ({ code: 400, message: 'Sem clientes disponíveis' });
  }
  return ({ code: 200, message: clients });
};

/* const login = async (email, password) => {
  return ({ code: 200, message: client });
};
 */
module.exports = {
  allClients,
  // login,
};
