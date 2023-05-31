const products = require("../models/products");

const { HttpError, ctrlWrapper } = require("../helpers");

const { validationCreateProduct } = require("../routes/api/validation");

const getAll = async (req, res, next) => {
  const result = await products.listProducts();
  return res.json({ status: "success", code: 200, result });
};

const getById = async (req, res, next) => {
  const product = await products.getProductById(req.params.productId);
  if (!product) {
    throw HttpError(404, "Not Found");
  }
  return res.json({ status: "success", code: 200, product });
};

const add = async (req, res, next) => {
  const product = await products.addProduct(req.body);
  console.log(validationCreateProduct);
  return res
    .status(201)
    .json({ status: "success", code: 201, data: { product } });
};

const deleteProduct = async (req, res, next) => {
  const product = await products.removeProduct(req.params.productId);
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
  const product = await products.updateById(req.params.productId, req.body);
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
};
