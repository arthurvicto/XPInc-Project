const getAssets = require('../models/assets');

const allAssets = async () => {
  const assets = await getAssets.getAllAssets();
  return assets;
};

module.exports = {
  allAssets,
};
