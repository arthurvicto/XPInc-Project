const connection = require("./connections");

const balance = async (idWallet) => {
  const [result] = await connection.execute(
    `SELECT * FROM XPInc.wallets
WHERE IdWallet = ?` , [idWallet]
  );
  return result;
};

module.exports = {
  balance,
};
