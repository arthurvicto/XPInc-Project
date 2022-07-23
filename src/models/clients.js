const connection = require('./connections');

const allClients = async () => {
  const [result] = await connection.execute(
    'SELECT idClient, name, email FROM XPInc.clients',
  );
  return result;
};

const login = async (email, password) => {
  const [result] = await connection.execute(
    'SELECT idClient, name, email FROM XPInc.clients WHERE email = ? AND password = ?',
    [email, password],
  );
  return result[0];
};

const walletsByIdClient = async (idClient) => {
  const [result] = await connection.execute(
    'SELECT * FROM XPInc.wallets WHERE idClient = ?',
    [idClient],
  );
  return result;
};

module.exports = {
  allClients,
  login,
  walletsByIdClient,
};
