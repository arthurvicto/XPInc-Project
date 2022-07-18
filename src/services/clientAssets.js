const clientAssetsFromModels = require("../models/clientAssets");

const clientAssets = async (id) => {
  const result = await clientAssetsFromModels.clientAssets(id);
  return result;
};

module.exports = {
  clientAssets,
};
