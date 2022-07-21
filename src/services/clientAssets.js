const clientAssetsFromModels = require('../models/clientAssets');

const clientAssets = async (idWallet) => {
  const result = await clientAssetsFromModels.clientAssets(idWallet);
  return result;
};

module.exports = {
  clientAssets,
};
