const assetsById = require('../models/clientAssets');

const checkAssets = async (idWallet, idAsset) => {
  const assetChecker = await assetsById.clientAssetsById(idWallet, idAsset);
  if (assetChecker.length === 0) {
    return false;
  }
  return true;
};

module.exports = {
  checkAssets,
};
