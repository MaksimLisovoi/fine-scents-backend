const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const productSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    url: String,
    urlDesktop: String,
    category: {
      type: String,
      required: true,
    },
    isBestseller: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post("save", handleMongooseError);

const schemaCreateProduct = Joi.object({
  type: Joi.string().required(),
  price: Joi.number().required(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  isBestseller: Joi.boolean(),
});

const schemaUpdateIsBestseller = Joi.object({
  isBestseller: Joi.boolean().required(),
});

const schemas = {
  schemaCreateProduct,
  schemaUpdateIsBestseller,
};

const Product = model("product", productSchema);

module.exports = {
  Product,
  schemas,
};
