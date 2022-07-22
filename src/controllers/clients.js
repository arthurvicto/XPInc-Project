const clientsFromServices = require('../services/clients');

const allClients = async (req, res) => {
  const clients = await clientsFromServices.allClients();
  res.status(clients.code).json(clients.message);
};

const login = async (req, res) => {
  const { email } = req.body;
  const client = await clientsFromServices.login(email);
  res.status(200).json({ token: client.message });
};

module.exports = {
  allClients,
  login,
};
