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
});

function readConfig(configFile) {
  dotenv.config({ path: configFile });

  const { value: values } = schema.validate(process.env);

  return {
    env: values.ENV,
    port: values.PORT,
    loglevel: values.LOGLEVEL,
  };
}

module.exports = {
  readConfig,
};
