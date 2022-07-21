const clientsFromServices = require('../services/clients');

const allClients = async (req, res) => {
  const clients = await clientsFromServices.allClients();
  res.status(200).json(clients);
};

module.exports = {
  allClients,
};
