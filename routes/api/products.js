const express = require("express");
const router = express.Router();

const { validationCreateProduct } = require("./validation");

const ctrl = require("../../controllers/products");

router.get("/", ctrl.getAll);

router.get("/:productId", ctrl.getById);

router.post("/", validationCreateProduct, ctrl.add);

router.delete("/:productId", ctrl.deleteProduct);

router.put("/:productId", validationCreateProduct, ctrl.updateById);

module.exports = router;
