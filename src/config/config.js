const dotenv = require('dotenv');
const Joi = require('joi');

const schema = Joi.object({
  PORT: Joi.number()
    .required(),
});

function readConfig(configFile) {
  dotenv.config({ path: configFile });

  const value = schema.validate(process.env);

  return {
    port: value.PORT,
  };
}

module.exports = {
  readConfig,
};
