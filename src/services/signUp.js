const newUser = require('../models/signUp');
const newWallet = require('../models/createWallet');

const createUser = async (name, email, password) => {
  const client = await newUser.createClient(name, email, password);
  const wallet = await newWallet.createWallet(client);
  return { code: 200, message: `Conta de código ${wallet} criado com sucesso!` };
};

module.exports = {
  createUser,
};
