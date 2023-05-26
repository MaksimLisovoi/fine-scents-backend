const express = require("express");
const router = express.Router();
const Products = require("../../models/products");

const { HttpError } = require("../../helpers");

const { validationCreateProduct } = require("./validation");

router.get("/", async (req, res, next) => {
  try {
    const products = await Products.listProducts();
    return res.json({ status: "success", code: 200, products });
  } catch (e) {
    next(e);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Products.getProductById(req.params.productId);
    if (!product) {
      throw HttpError(404, "Not Found");
    }
    return res.json({ status: "success", code: 200, product });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const product = await Products.addProduct(req.body);
    console.log(validationCreateProduct);
    return res
      .status(201)
      .json({ status: "success", code: 201, data: { product } });
  } catch (e) {
    next(e);
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    const product = await Products.removeProduct(req.params.productId);
    if (product) {
      return res.json({
        status: "success",
        code: 200,
        message: "product deleted",
      });
    }
    return res.json({ status: "error", code: 404, message: "Not found" });
  } catch (e) {
    next(e);
  }
});

router.put("/:productId", validationCreateProduct, async (req, res, next) => {
  try {
    const product = await Products.updateById(req.params.productId, req.body);
    if (product) {
      return res.json({ status: "success", code: 200, data: { product } });
    }
    return res.json({ status: "error", code: 404, message: "Not found" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
