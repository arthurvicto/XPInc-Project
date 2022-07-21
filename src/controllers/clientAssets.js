const clientAssetsFromServices = require('../services/clientAssets');

const clientAssets = async (req, res) => {
  const { idWallet } = req.params;
  const clients = await clientAssetsFromServices.clientAssets(idWallet);
  res.status(200).json(clients);
};

module.exports = {
  clientAssets,
};
