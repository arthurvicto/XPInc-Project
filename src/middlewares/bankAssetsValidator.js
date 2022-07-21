const assetsById = require('../models/assets');

module.exports = async (req, res, next) => {
  const { idAsset, qtde } = req.body;
  const asset = await assetsById.getAssetById(idAsset);
  if (asset.qtde < qtde) {
    return res.status(400).json({
      message: 'Não foi possível realizar a compra do ativo'
      + ` ${asset.name}, pois a quantia desejada não está disponível pela corretora`,
    });
  }
  return next();
};
