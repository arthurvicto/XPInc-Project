const clientAssets = require('../models/clientAssets');

module.exports = async (req, res, next) => {
  const { idWallet, idAsset, qtde } = req.body;
  const assetsQuantityOnWallet = await clientAssets.clientAssetsById(idWallet, idAsset);
  if (assetsQuantityOnWallet[0].qtde < qtde) {
    return res
      .status(400)
      .json({ message: 'Número de ativos insuficientes na carteira' });
  }
  if (assetsQuantityOnWallet.length === 0) {
    return res
      .status(400)
      .json({ message: 'Não existe o ativo inserido na carteira' });
  }
  return next();
};
