const newUser = require('../services/signUp');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const client = await newUser.createUser(name, email, password);
  res.status(client.code).json({ message: client.message });
};

module.exports = {
  createUser,
};
