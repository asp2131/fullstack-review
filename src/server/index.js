const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

const { app } = require('./app');

const PORT = 8080;

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/favicon.png'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
