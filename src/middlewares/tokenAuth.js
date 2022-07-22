const { authenticateToken } = require('../jwt/jwt');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  try {
    await authenticateToken(token);
  } catch (error) {
    return res.status(401).json({ message: 'Token expirado ou inválido' });
  }
  return next();
};
