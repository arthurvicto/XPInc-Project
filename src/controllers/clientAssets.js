const clientAssetsFromServices = require("../services/clientAssets");

const clientAssets = async (req, res) => {
  const { id } = req.params;
  const clients = await clientAssetsFromServices.clientAssets(id);
  res.status(200).json(clients);
};

module.exports = {
  clientAssets,
};
