const connection = require('./connections');

const allClients = async () => {
  const [result] = await connection.execute(
    'SELECT idClient, name, email FROM heroku_29e026717847b94.clients',
  );
  return result;
};

const login = async (email, password) => {
  const [result] = await connection.execute(
    'SELECT idClient, name, email FROM heroku_29e026717847b94.clients WHERE email = ? AND password = ?',
    [email, password],
  );
  return result[0];
};

const idClientByEmail = async (email) => {
  const [result] = await connection.execute(
    'SELECT idClient, name, email FROM heroku_29e026717847b94.clients WHERE email = ?',
    [email],
  );
  return result[0].idClient;
};

const walletsByIdClient = async (idClient) => {
  const [result] = await connection.execute(
    'SELECT * FROM heroku_29e026717847b94.wallets WHERE idClient = ?',
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
