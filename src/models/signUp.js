const connection = require('./connections');

const createClient = async (name, email, password) => {
  const [result] = await connection.execute(
    'INSERT INTO heroku_29e026717847b94.clients (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
  );
  const { insertId } = result;
  return insertId;
};

module.exports = {
  createClient,
};
