const allAssets = require('../services/assets');

const allAssetsFromServices = async (req, res) => {
  const assets = await allAssets.allAssets();
  res.status(200).json(assets);
};

module.exports = {
  allAssetsFromServices,
};
