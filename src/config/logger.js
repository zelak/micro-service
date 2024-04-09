const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
  defaultMeta: { service: 'micro-service' },
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transport: [],
});

module.exports = logger;

function init({ env, loglevel: level }) {
  // Console
  logger.add(
    new winston.transports.Console({
      level,
      silent: env === 'test',
    }),
  );

  // Log file
  if (env !== 'dev') {
    logger.add(
      new winston.transports.File({
        level,
        filename: path.join(__dirname, '../../logs/app.log'),
      }),
    );
  }
}

function destroy() {
  logger.clear();
  logger.close();
}

module.exports.init = init;
module.exports.destroy = destroy;
