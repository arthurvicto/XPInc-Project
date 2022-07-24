const connection = require('./connections');

const allClients = async () => {
  const [result] = await connection.execute(
    'SELECT idClient, name, email FROM clients',
  );
  return result;
};

const login = async (email, password) => {
  const [result] = await connection.execute(
    'SELECT idClient, name, email FROM clients WHERE email = ? AND password = ?',
    [email, password],
  );
  return result[0];
};

const idClientByEmail = async (email) => {
  const [result] = await connection.execute(
    'SELECT idClient, name, email FROM clients WHERE email = ?',
    [email],
  );
  return result[0];
};

const walletsByIdClient = async (idClient) => {
  const [result] = await connection.execute(
    'SELECT * FROM wallets WHERE idClient = ?',
    [idClient],
  );
  return result;
};

module.exports = {
  allClients,
  login,
  walletsByIdClient,
  idClientByEmail,
};
