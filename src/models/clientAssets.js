const connection = require("./connections");

const clientAssets = async (id) => {
  const [result] = await connection.execute(
    `SELECT ca.idWallet, ca.idAsset, a.name, ca.qtde, a.value
FROM XPInc.client_assets ca
 JOIN XPInc.assets as a on ca.idAsset = a.idAsset
 WHERE idWallet = ?;`,
    [id]
  );
  return result;
};

module.exports = {
  clientAssets,
};
