const getAssets = require('../models/assets');

module.exports = async (req, res, next) => {
  const assets = await getAssets.getAllAssets();
  if (assets.length === 0 || assets === undefined || assets === null) {
    return res.status(404).json({
      message: 'Nenhuma ação disponível para transação na corretora',
    });
  }
  return next();
};
