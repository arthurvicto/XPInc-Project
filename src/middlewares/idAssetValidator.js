const assets = require('../models/assets');

module.exports = async (req, res, next) => {
  const { idAsset } = req.body;
  const asset = await assets.getAssetById(idAsset);
  if (typeof idAsset !== 'number') {
    return res.status(400).json({
      message: 'O código do ativo deve ser um número',
    });
  }
  if (idAsset <= 0) {
    return res.status(400).json({
      message: 'O código do ativo deve ser maior que zero',
    });
  }
  if (idAsset === undefined || idAsset === null || !idAsset) {
    return res.status(400).json({
      message: 'O código do ativo deve ser informado',
    });
  }
  if (asset === null || asset === undefined) {
    return res.status(400).json({
      message: 'Ativo não encontrado',
    });
  }
  return next();
};
