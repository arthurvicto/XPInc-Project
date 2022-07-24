const connection = require('./connections');

const createWallet = async (idClient) => {
  const [result] = await connection.execute(
    'INSERT INTO wallets (idClient) VALUES (?)',
    [idClient],
  );
  return result.insertId;
};

module.exports = {
  createWallet,
};
