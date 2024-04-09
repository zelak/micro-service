const path = require('path');
const app = require('./app');
const { readConfig } = require('./config/config');
const logger = require('./config/logger');

async function run() {
  // configuration
  const configFile = path.join(__dirname, '../configs/.env');
  const config = readConfig(configFile);

  logger.init(config);

  // express listen
  app.listen(config.port, () => {
    logger.info(`listening on port ${config.port}`);
  });
}

run();
