const clientInvestment = require("../models/investment");
const assetsById = require("../models/assets");

const buyAssets = async (idClient, idAsset, qtdeAsset, value) => {
  const quantityValidator = await assetsById.getAssetById(idAsset);
  const assetsPrice = qtdeAsset * +quantityValidator.value;
  const result = await clientInvestment.assetsHistory(
    idClient,
    (operation = "bought"),
    idAsset,
    (qtde = qtdeAsset),
    (value = assetsPrice)
  );
  return {
    code: 200,
    message:
      "Investimento realizado com sucesso para o ativo " +
      quantityValidator.name +
      " com " + qtdeAsset + " unidades com valor de " +
      "R$ " + assetsPrice + " reais",
  };
};

module.exports = {
  buyAssets,
};
