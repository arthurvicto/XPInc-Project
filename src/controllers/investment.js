const clientInvestment = require("../services/investment");

const buyAssets = async (req, res) => {
  const { idClient, idAsset, qtdeAsset } = req.body;
  const result = await clientInvestment.buyAssets(idClient, idAsset, qtdeAsset);
  res.status(result.code).json(result.message);
};

module.exports = {
  buyAssets,
};
