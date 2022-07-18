const allAssets = require("../services/assets");

const allAssetsFromServices = async (req, res) => {
  const assets = await allAssets.allAssets();
  res.status(200).json(assets);
};

const assetsById = async (req, res) => {
  const assets = await allAssets.assetsById(req.params.id);
  res.status(200).json(assets);
};

module.exports = {
  allAssetsFromServices,
  assetsById,
};
