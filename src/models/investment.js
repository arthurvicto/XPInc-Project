const connection = require("./connections");

const assetsHistory = async (idWallet, operation, idAsset, qtde, value) => {
  const [result] = await connection.execute(
    `INSERT INTO XPInc.assets_history (idWallet, operation, idAsset, qtde, value) VALUES
    (?, ?, ?, ?, ?);`,
    [idWallet, operation, idAsset, qtde, value]
  );
  return result;
};

const improveAssets = async (idWallet, idAsset, qtde) => {
  const [result] = await connection.execute(
    `UPDATE XPInc.client_assets
        SET qtde = qtde + ?
        WHERE idWallet = ? AND idAsset = ?`,
    [qtde, idWallet, idAsset]
  );
  return result;
};

const decreaseAssets = async (idWallet, idAsset, qtde) => {
  const [result] = await connection.execute(
    `UPDATE XPInc.client_assets
            SET qtde = qtde - ?
            WHERE idWallet = ? AND idAsset = ?`,
    [qtde, idWallet, idAsset]
  );
  return result;
};

module.exports = {
  assetsHistory,
  improveAssets,
  decreaseAssets,
};
