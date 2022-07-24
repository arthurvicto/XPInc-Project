const connection = require('./connections');

const clientAssets = async (idWallet) => {
  const [result] = await connection.execute(
    `SELECT ca.idWallet, ca.idAsset, a.name, ca.qtde, a.value
  FROM client_assets ca
  JOIN assets as a on ca.idAsset = a.idAsset
  WHERE idWallet = ?
  AND ca.qtde > 0;`,
    [idWallet],
  );
  return result;
};

const clientAssetsById = async (idWallet, idAsset) => {
  const [result] = await connection.execute(
    `SELECT * FROM client_assets
WHERE idWallet = ? AND idAsset = ?`,
    [idWallet, idAsset],
  );
  return result;
};

const improveAssets = async (idWallet, idAsset, qtde) => {
  const [result] = await connection.execute(
    `UPDATE client_assets
    SET qtde = qtde + ?
    WHERE idWallet = ? AND idAsset = ?`,
    [qtde, idWallet, idAsset],
  );
  return result;
};

const decreaseAssets = async (idWallet, idAsset, qtde) => {
  const [result] = await connection.execute(
    `UPDATE client_assets
    SET qtde = qtde - ?
    WHERE idWallet = ? AND idAsset = ?`,
    [qtde, idWallet, idAsset],
  );
  return result;
};

const createAsset = async (idWallet, idAsset, qtde) => {
  const [result] = await connection.execute(
    `INSERT INTO client_assets (idWallet, idAsset, qtde)
    VALUES (?, ?, ?)`,
    [idWallet, idAsset, qtde],
  );
  return result;
};

const deleteAsset = async (idWallet, idAsset) => {
  const [result] = await connection.execute(
    `DELETE FROM client_assets
    WHERE idWallet = ? AND idAsset = ?`,
    [idWallet, idAsset],
  );
  return result;
};

module.exports = {
  clientAssets,
  improveAssets,
  createAsset,
  clientAssetsById,
  decreaseAssets,
  deleteAsset,
};
