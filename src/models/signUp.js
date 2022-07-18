const connection = require("./connections");

const createClient = async (name, email, password) => {
  const [result] = await connection.execute(`INSERT INTO XPInc.clients (name, email, password) VALUES (?, ?, ?)`, [name, email, password]);
  const { insertId } = result;
  return insertId;
};

const createWallet = async (clientId) => {
  const [result] = await connection.execute(`INSERT INTO XPInc.wallets (idClient) VALUES (?)`, [clientId]);
  return result;
};

module.exports = {
  createClient,
  createWallet,
};
