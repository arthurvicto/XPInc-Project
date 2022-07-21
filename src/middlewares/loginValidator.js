const emailValidator = require('../utils/emailRegex');
const clientsFromModels = require('../models/clients');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  const client = await clientsFromModels.login(email, password);
  if (!email || !password) {
    return res.status(400).json({ error: 'Dados insuficientes' });
  }
  if (!emailValidator.validateEmail(email)) {
    return res.status(400).json({ error: 'Formato de email inválido' });
  }
  if (client.length === 0) {
    return res.status(400).json({ error: 'Cliente não cadastrado' });
  }
  return next();
};
