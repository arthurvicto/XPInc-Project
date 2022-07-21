const allUsers = require('../models/clients');
const emailRegex = require('../utils/emailRegex');

module.exports = async (req, res, next) => {
  const { name, email, password } = req.body;
  const allClients = await allUsers.allClients();
  const emailValidator = allClients.find((client) => client.email === email);
  if (emailValidator) {
    return res.status(400).json({ error: 'Email já cadastrado' });
  }
  if (name === '' || email === '' || password === '') {
    return res.status(400).json({ error: 'Preencha todos os campos' });
  }
  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Preencha todos os campos corretamente' });
  }
  if (name.length < 3) {
    return res.status(400).json({ error: 'Nome muito curto' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Senha precisa ter pelo menos 6 caracteres!' });
  }
  if (!emailRegex.validateEmail(email)) {
    return res.status(400).json({ error: 'Formato de email inválido!!' });
  }
  return next();
};
