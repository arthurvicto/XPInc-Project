const allAssets = require('../models/assets');

module.exports = async (req, res, next) => {
  const { idAsset } = req.params;
  const existAsset = await allAssets.getAssetById(idAsset);
  if (idAsset <= 0) {
    return res.status(400).json({
      message: 'O código da ação deve ser maior que zero',
    });
  }
  if (existAsset === null || existAsset === undefined) {
    return res.status(404).json({
      message: 'Ação não encontrada',
    });
  }
  return next();
};
