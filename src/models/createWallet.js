const connection = require('./connections');

const createWallet = async (idClient) => {
  const [result] = await connection.execute(
    'INSERT INTO heroku_29e026717847b94.wallets (idClient) VALUES (?)',
    [idClient],
  );
  return result.insertId;
};

module.exports = {
  createWallet,
};
