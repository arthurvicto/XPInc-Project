const connection = require('./connections');

const getAllAssets = async () => {
  const [result] = await connection.execute('SELECT * FROM XPInc.assets');
  return result;
};

const getAssetById = async (idAsset) => {
  const [result] = await connection.execute(
    'SELECT * FROM XPInc.assets WHERE idAsset = ?',
    [idAsset],
  );
  return result[0];
};

const decreaseAssets = async (idAsset, qtde) => {
  const [result] = await connection.execute(
    `UPDATE XPInc.assets
    SET qtde = qtde - ?
    WHERE idAsset = ?;`,
    [qtde, idAsset],
  );
  return result;
};

const improveAssets = async (idAsset, qtde) => {
  const [result] = await connection.execute(
    `UPDATE XPInc.assets
    SET qtde = qtde + ?
    WHERE idAsset = ?;`,
    [qtde, idAsset],
  );
  return result;
};

module.exports = {
  getAllAssets,
  getAssetById,
  decreaseAssets,
  improveAssets,
};
