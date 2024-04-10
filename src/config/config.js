const dotenv = require('dotenv');
const Joi = require('joi');

const schema = Joi.object({
  ENV: Joi.string()
    .valid(
      'prod',
      'dev',
      'test',
    )
    .required(),

  PORT: Joi.number()
    .required(),

  LOGLEVEL: Joi.string()
    .valid(
      'error',
      'warn',
      'info',
      'debug',
    )
    .default('info'),

  MONGO_URL: Joi.string()
    .required(),

  MONGO_RETRY: Joi.number()
    .default(5000), // 5s
});

function readConfig(configFile) {
  dotenv.config({ path: configFile });

  const { value: values, error } = schema.validate(process.env);

  if (error) {
    // throw new Error(`Invalid configuration: ${error.message}`);
  }

  return {
    env: values.ENV,
    port: values.PORT,
    loglevel: values.LOGLEVEL,
    mongo: {
      url: values.MONGO_URL,
      retry: values.MONGO_RETRY,
    },
  };
}

module.exports = {
  readConfig,
};
