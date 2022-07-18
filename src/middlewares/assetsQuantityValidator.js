const assetsById = require("../models/assets");

  module.exports = async (req, res, next) => {
   const { idAsset, qtdeAsset } = req.body;
  const quantityValidator = await assetsById.getAssetById(idAsset);
    if (quantityValidator.qtde < qtdeAsset) {
    return res.status(400).json({ message: 'quantidade máxima atingida' });
  }
    next();
  };
