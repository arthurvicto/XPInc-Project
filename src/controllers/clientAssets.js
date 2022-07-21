const clientAssetsFromServices = require('../services/clientAssets');

const clientAssets = async (req, res) => {
  const { idWallet } = req.params;
  const clients = await clientAssetsFromServices.clientAssets(idWallet);
  res.status(clients.code).json({ message: clients.message });
};

module.exports = {
  clientAssets,
};
