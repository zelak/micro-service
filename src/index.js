const path = require('path');
const app = require('./app');
const { readConfig } = require('./config/config');

async function run() {
  // configuration
  const configFile = path.join(__dirname, '../configs/.env');
  const config = readConfig(configFile);

  // express listen
  app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
  });
}

run();
