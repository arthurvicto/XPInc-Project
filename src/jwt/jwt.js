const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256',
};
const generateJWTToken = ({ email }) => jwt.sign({ email }, SECRET, jwtConfig);

const authenticateToken = async (token) => {
  const validate = jwt.verify(token, SECRET);
  return validate;
};

module.exports = {
  generateJWTToken,
  authenticateToken,
};
