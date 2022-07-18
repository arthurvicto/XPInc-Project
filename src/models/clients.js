const connection = require("./connections");

const allClients = async () => {
  const [result] = await connection.execute(`SELECT idClient, name, email FROM XPInc.clients`);
  return result;
};



module.exports = {
  allClients,
};
