const clientsFromModels = require('../models/clients');

const allClients = async () => {
  const clients = await clientsFromModels.allClients();
  return clients;
};

module.exports = {
  allClients,
};
