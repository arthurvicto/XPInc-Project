const connection = require('./connections');

const clientWalletById = async (idWallet) => {
  const [result] = await connection.execute(
    `SELECT * FROM heroku_29e026717847b94.wallets
WHERE IdWallet = ?`,
    [idWallet],
  );
  return result[0];
};

const clientWalletByIdClient = async (idClient) => {
  const [result] = await connection.execute(
    `SELECT * FROM heroku_29e026717847b94.wallets
WHERE IdClient = ?`,
    [idClient],
  );
  return result;
};

const deposit = async (idWallet, value) => {
  const [result] = await connection.execute(
    `UPDATE heroku_29e026717847b94.wallets
SET balance = balance + ?
WHERE IdWallet = ?`,
    [value, idWallet],
  );
  return result;
};

const withdraw = async (idWallet, value) => {
  const [result] = await connection.execute(
    `UPDATE wallets
SET balance = balance - ?
WHERE IdWallet = ?`,
    [value, idWallet],
  );
  return result;
};

const history = async (idWallet, operation, value) => {
  const [result] = await connection.execute(
    'INSERT INTO wallet_history (IdWallet, operation, value) VALUES (?, ?, ?)',
    [idWallet, operation, value],
  );
  return result;
};

module.exports = {
  clientWalletById,
  deposit,
  withdraw,
  history,
  clientWalletByIdClient,
};
