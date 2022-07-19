const assetsById = require("../models/assets");


const checkAssetsPrice = async (idAsset, qtde) => {
  const quantityValidator = await assetsById.getAssetById(idAsset);
  const assetsPrice = qtde * +quantityValidator.value;
  return assetsPrice;
};

module.exports = {
    checkAssetsPrice,
};
