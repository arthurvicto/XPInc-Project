const assetsById = require("../models/assets");
const clientBalance = require("../models/wallet");

module.exports = async (req, res, next) => {
  const { idClient, idAsset, qtdeAsset } = req.body;
  const quantityValidator = await assetsById.getAssetById(idAsset);
  const balanceValidator = await clientBalance.balance(idClient);
  const assetsPrice = qtdeAsset * +quantityValidator.value;
  if (balanceValidator.balance < assetsPrice) {
   return res.status(400).json({ message: 'saldo insuficiente' });
 }
  next();
};


