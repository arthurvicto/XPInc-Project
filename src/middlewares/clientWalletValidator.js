const assetsById = require('../models/assets');
const clientBalance = require('../models/wallet');

module.exports = async (req, res, next) => {
  const { idWallet, idAsset, qtde } = req.body;
  const asset = await assetsById.getAssetById(idAsset);
  const clientWallet = await clientBalance.clientWalletById(idWallet);
  const assetsPrice = qtde * +asset.value;
  if (clientWallet.balance < assetsPrice) {
    return res.status(400).json({
      message: 'Não foi possível realizar a compra do'
    + ` ativo ${asset.name}, valor R$ ${assetsPrice},`
    + `pois não há saldo suficiente na carteira ${idWallet} `,
    });
  }
  return next();
};
