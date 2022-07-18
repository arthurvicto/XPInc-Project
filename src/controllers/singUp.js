const newUser = require("../services/singUp");

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
  const client = await newUser.createUser(name, email, password);
  res.status(200).json({ message: "Usuário criado com sucesso!" });
};

module.exports = {
  createUser,
};
