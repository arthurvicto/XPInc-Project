const clientInvestment = require('../services/investment');

const buyAssets = async (req, res) => {
  const { idWallet, idAsset, qtde } = req.body;
  const result = await clientInvestment.buyAssets(idWallet, idAsset, qtde);
  res.status(result.code).json({ message: result.message });
};

module.exports = {
  buyAssets,
};
