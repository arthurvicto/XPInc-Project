const clientInvestment = require('../models/investment');
const walletTransactions = require('../models/wallet');
const assetsQuantityOnBank = require('../models/assets');
const walletAssets = require('../models/clientAssets');
const clientAssets = require('../utils/clientAssets');
const checkAssetsPrice = require('../utils/assetsPriceOnRequest');

const buyAssets = async (idWallet, idAsset, qtde) => {
  const value = await checkAssetsPrice.checkAssetsPrice(idAsset, qtde);
  const operation = 'bought';
  await walletTransactions.withdraw(idWallet, value);
  await assetsQuantityOnBank.decreaseAssets(idAsset, qtde);
  const assets = await clientAssets.checkAssets(idWallet, idAsset);
  if (assets) {
    await walletAssets.improveAssets(idWallet, idAsset, qtde);
  }
  if (!assets) {
    await walletAssets.createAsset(idWallet, idAsset, qtde);
  }
  await clientInvestment.assetsHistory(idWallet, operation, idAsset, qtde, value);
  return {
    code: 201,
    message:
      `Compra realizado com sucesso para o ativo ${idAsset} `
      + `com ${qtde} unidades com valor de R$ ${value} reais`,
  };
};

const sellAssets = async (idWallet, idAsset, qtde) => {
  const value = await checkAssetsPrice.checkAssetsPrice(idAsset, qtde);
  const operation = 'sold';
  await walletAssets.decreaseAssets(idWallet, idAsset, qtde);
  await walletTransactions.deposit(idWallet, value);
  await assetsQuantityOnBank.improveAssets(idAsset, qtde);
  await clientInvestment.assetsHistory(idWallet, operation, idAsset, qtde, value);
  return {
    code: 201,
    message:
      `Venda realizado com sucesso para o ativo ${idAsset} `
      + `com ${qtde} unidades com valor de R$ ${value} reais`,
  };
};

module.exports = {
  buyAssets,
  sellAssets,
};
