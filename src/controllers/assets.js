const allAssets = require('../services/assets');

const allAssetsFromServices = async (req, res) => {
  const assets = await allAssets.allAssets();
  res.status(assets.code).json(assets.message);
};

const assetsById = async (req, res) => {
  const { idAsset } = req.params;
  const assets = await allAssets.assetsById(idAsset);
  res.status(200).json(assets);
};

module.exports = {
  allAssetsFromServices,
  assetsById,
};
