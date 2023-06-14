const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const applyingTypeSchema = new Schema(
  {
    header: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: String,
    imgDesktop: String,
    category: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

applyingTypeSchema.post("save", handleMongooseError);

const schemaCreateApplyingType = Joi.object({
  header: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  img: Joi.string(),
  imgDesktop: Joi.string(),
});

const schemas = {
  schemaCreateApplyingType,
};

const ApplyingType = model("applyingType", applyingTypeSchema);

module.exports = {
  ApplyingType,
  schemas,
};
