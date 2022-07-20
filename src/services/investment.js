const clientInvestment = require('../models/investment');
const paymentWithWallet = require('../models/wallet');
const decreaseAssets = require('../models/assets');
const walletAssets = require('../models/clientAssets');
const checkAssets = require('../utils/clientAssets');
const checkAssetsPrice = require('../utils/assetsPriceOnRequest');

const buyAssets = async (idWallet, idAsset, qtde) => {
  const price = await checkAssetsPrice.checkAssetsPrice(idAsset, qtde);
  const value = price;
  const operation = 'bought';
  await clientInvestment.assetsHistory(
    idWallet,
    operation,
    idAsset,
    qtde,
    value,
  );
  await paymentWithWallet.withdraw(idWallet, price);
  await decreaseAssets.decreaseAssets(idAsset, qtde);
  const assets = await checkAssets.checkAssets(idWallet, idAsset);
  if (assets) {
    await walletAssets.improveAssets(idWallet, idAsset, qtde);
  }
  if (!assets) {
    await walletAssets.createAsset(idWallet, idAsset, qtde);
  }

  return {
    code: 200,
    message:
      `Investimento realizado com sucesso para o ativo ${idAsset} `
      + `com ${qtde} unidades com valor de R$ ${price} reais`,
  };
};

module.exports = {
  buyAssets,
};
