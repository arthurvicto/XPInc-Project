const connection = require("./connections");

const createWallet = async (clientId) => {
  const [result] = await connection.execute(
    `INSERT INTO XPInc.wallets (idClient) VALUES (?)`,
    [clientId]
  );
  return result.insertId;
};

module.exports = {
  createWallet,
};
