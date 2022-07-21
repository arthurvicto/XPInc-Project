const clientAssetsFromModels = require('../models/clientAssets');

const clientAssets = async (idWallet) => {
  const result = await clientAssetsFromModels.clientAssets(idWallet);
  if (result === null || result.length === 0) {
    return ({ code: 400, message: 'A carteira não possui ativos' });
  }
  return ({ code: 200, message: result });
};

module.exports = {
  clientAssets,
};
