const clientInvestment = require('../models/investment');
const walletTransactions = require('../models/wallet');
const assetsQuantity = require('../models/assets');
const walletAssets = require('../models/clientAssets');
const checkAssets = require('../utils/clientAssets');
const checkAssetsPrice = require('../utils/assetsPriceOnRequest');

const buyAssets = async (idWallet, idAsset, qtde) => {
  const price = await checkAssetsPrice.checkAssetsPrice(idAsset, qtde);
  const value = price;
  const operation = 'bought';

  const assets = await checkAssets.checkAssets(idWallet, idAsset);
  if (assets) {
    await walletAssets.improveAssets(idWallet, idAsset, qtde);
  }
  if (!assets) {
    await walletAssets.createAsset(idWallet, idAsset, qtde);
  }
  await walletTransactions.withdraw(idWallet, price);
  await assetsQuantity.decreaseAssets(idAsset, qtde);
  await clientInvestment.assetsHistory(
    idWallet,
    operation,
    idAsset,
    qtde,
    value,
  );
  return {
    code: 200,
    message:
      `Compra realizado com sucesso para o ativo ${idAsset} `
      + `com ${qtde} unidades com valor de R$ ${price} reais`,
  };
};

const sellAssets = async (idWallet, idAsset, qtde) => {
  const price = await checkAssetsPrice.checkAssetsPrice(idAsset, qtde);
  const value = price;
  const operation = 'sold';
  const assets = await checkAssets.checkAssets(idWallet, idAsset);
  if (!assets) {
    return {
      code: 400,
      message: 'Não foi possível realizar o investimento',
    };
  }
  if (assets) {
    await walletAssets.decreaseAssets(idWallet, idAsset, qtde);
  }
  if (assets.qtde === 0) {
    await walletAssets.deleteAsset(idWallet, idAsset);
  }
  await walletTransactions.deposit(idWallet, price);
  await assetsQuantity.improveAssets(idAsset, qtde);
  await clientInvestment.assetsHistory(
    idWallet,
    operation,
    idAsset,
    qtde,
    value,
  );
  return {
    code: 200,
    message:
      `Venda realizado com sucesso para o ativo ${idAsset} `
      + `com ${qtde} unidades com valor de R$ ${price} reais`,
  };
};

module.exports = {
  buyAssets,
  sellAssets,
};
