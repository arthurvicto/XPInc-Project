const newUser = require("../models/signUp");
const allUsers = require("../models/clients");

const createUser = async (name, email, password) => {
  const allClients = await allUsers.allClients();
  const emailValidator = allClients.find(client => client.email === email);
  if (emailValidator) {
    return { code: 400, message: "Usuário já cadastrado!" };
  } else {
    const client = await newUser.createClient(name, email, password);
    await newUser.createWallet(client);
    return { code: 200, message: "Conta criado com sucesso!" };
};
};

module.exports = {
  createUser,
};