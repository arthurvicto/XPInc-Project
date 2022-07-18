const newUser = require("../models/singUp");

const createUser = async (name, email, password) => {
  const client = await newUser.createClient(name, email, password);
  return client;
};

module.exports = {
  createUser,
};
