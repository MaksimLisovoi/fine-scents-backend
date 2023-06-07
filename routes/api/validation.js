const { schemas } = require("../../models/product.js");
const { schemas: userSchemas } = require("../../models/user");

const validate = async (schema, obj, next) => {
  try {
    await schema.validateAsync(obj);
    next();
  } catch (err) {
    next({
      status: 400,
      message: err.message.replace(/"/g, ""),
    });
  }
};

module.exports = {
  validatiionCreateUser: (req, res, next) => {
    return validate(userSchemas.registerSchema, req.body, next);
  },
  validatiionLoginUser: (req, res, next) => {
    return validate(userSchemas.loginSchema, req.body, next);
  },
  validationCreateProduct: (req, res, next) => {
    return validate(schemas.schemaCreateProduct, req.body, next);
  },
  validationUpdateProduct: (req, res, next) => {
    return validate(schemas.schemaUpdateIsBestseller, req.body, next);
  },
};
