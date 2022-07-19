const assetsById = require("../models/assets");

  module.exports = async (req, res, next) => {
   const { idAsset, qtde } = req.body;
  const quantityValidator = await assetsById.getAssetById(idAsset);
    if (quantityValidator.qtde < qtde) {
    return res.status(400).json({ message: 'quantidade máxima atingida' });
  }
    next();
  };
