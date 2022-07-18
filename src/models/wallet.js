const connection = require("./connections");

const balance = async (idWallet) => {
  const [result] = await connection.execute(
    `SELECT * FROM XPInc.wallets
WHERE IdWallet = ?`,
    [idWallet]
  );
  return result;
};

const deposit = async (idWallet, value) => {
  const [result] = await connection.execute(
    `UPDATE XPInc.wallets
SET balance = Balance + ?
WHERE IdWallet = ?`,
    [value, idWallet]
  );
  return result;
};

module.exports = {
  balance,
  deposit,
};
