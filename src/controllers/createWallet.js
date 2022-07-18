const newWalletFromServices = require("../services/createWallet");

const newWallet = async (req, res) => {
    try {
        const { id } = req.params;
        const wallet = await newWalletFromServices.newWallet(id);
        res.status(wallet.code).json(wallet.message);
    } catch (error) {
      console.log(error);
    }

};

module.exports = {
  newWallet,
};
