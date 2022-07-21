const getAssets = require('../models/assets');

const allAssets = async () => {
  const assets = await getAssets.getAllAssets();
  return ({ code: 200, message: assets });
};

const assetsById = async (id) => {
  const assets = await getAssets.getAssetById(id);
  return assets;
};

module.exports = {
  allAssets,
  assetsById,
};
