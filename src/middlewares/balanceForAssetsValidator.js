const assetsById = require("../models/assets");
const clientBalance = require("../models/wallet");

module.exports = async (req, res, next) => {
  const { idWallet, idAsset, qtde } = req.body;
  const quantityValidator = await assetsById.getAssetById(idAsset);
  const balanceValidator = await clientBalance.balance(idWallet);
  const assetsPrice = qtde * +quantityValidator.value;
  if (balanceValidator.balance < assetsPrice) {
   return res.status(400).json({ message: 'saldo insuficiente' });
 }
  next();
};


