const clientsFromServices = require('../services/clients');

const allClients = async (req, res) => {
  const clients = await clientsFromServices.allClients();
  res.status(clients.code).json(clients.message);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // const client = await clientsFromServices.login(email, password);
  res.status(200).json({ email, password });
};

module.exports = {
  allClients,
  login,
};
