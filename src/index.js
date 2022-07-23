const app = require('./app');
require('dotenv').config();

const { PORT } = process.env || 3000;

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
