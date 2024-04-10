const mongoose = require('mongoose');
const logger = require('../config/logger');

let mongoUrl;
let initRetry;
async function init({ mongo: { url, retry } }) {
  mongoUrl = url;
  initRetry = retry;

  try {
    await mongoose.connect(mongoUrl);
  } catch (err) {
    logger.error('error connecting MongoDB', { err });
    setTimeout(init, retry, { mongo: { url, retry } });
  }
}

const db = mongoose.connection;

function destroy() {
  db.removeAllListeners();
  return mongoose.disconnect();
}

db.on('connected', () => {
  logger.info('db connected');
});

db.on('open', () => {
  logger.info('db open');
});

db.on('close', () => {
  logger.info('db close');
});

db.on('error', (error) => {
  logger.error('db error', { error });
});

db.on('disconnected', () => {
  logger.info('db disconnected');
  init({ mongo: { url: mongoUrl, retry: initRetry } });
});

db.on('reconnected', () => {
  logger.info('db reconnected');
});

db.on('disconnecting', () => {
  logger.info('db disconnecting');
});

module.exports = {
  init,
  destroy,
};
