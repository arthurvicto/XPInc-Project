const connection = require('./connections');

const getAllAssets = async () => {
  const [result] = await connection.execute(`SELECT * FROM XPInc.assets`);
  return result;
};

const getAssetById = async (id) => {
    const [result] = await connection.execute(`SELECT * FROM XPInc.assets WHERE idAsset = ?`, [id]);
    return result;
};

module.exports = {
  getAllAssets,
  getAssetById
};