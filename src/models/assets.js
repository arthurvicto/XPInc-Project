const connection = require('./connections');

const getAllAssets = async () => {
  const [result] = await connection.execute(`SELECT * FROM XPInc.assets`);
  return result;
};

module.exports = {
  getAllAssets,
};