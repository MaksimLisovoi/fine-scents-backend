const { Product } = require("../models/product");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
  const result = await Product.find();
  return res.json({ status: "success", code: 200, result });
};

const getById = async (req, res, next) => {
  const { productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw HttpError(404, "Not Found");
  }
  return res.json({ status: "success", code: 200, product });
};

const add = async (req, res, next) => {
  const product = await Product.create(req.body);
  return res
    .status(201)
    .json({ status: "success", code: 201, data: { product } });
};

const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  const product = await Product.findByIdAndDelete(productId);
  if (product) {
    return res.json({
      status: "success",
      code: 200,
      message: "product deleted",
    });
  }
  return res.json({ status: "error", code: 404, message: "Not found" });
};

const updateById = async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );
  if (product) {
    return res.json({ status: "success", code: 200, data: { product } });
  }
  return res.json({ status: "error", code: 404, message: "Not found" });
};

const updateFavorite = async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );
  if (product) {
    return res.json({ status: "success", code: 200, data: { product } });
  }
  return res.json({ status: "error", code: 404, message: "Not found" });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteProduct: ctrlWrapper(deleteProduct),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
