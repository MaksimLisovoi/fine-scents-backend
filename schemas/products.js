const Joi = require("joi");

const schemaCreateProduct = Joi.object({
  type: Joi.string().required(),
  price: Joi.number().required(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  isBestseller: Joi.boolean().required(),
});

module.exports = { schemaCreateProduct };
