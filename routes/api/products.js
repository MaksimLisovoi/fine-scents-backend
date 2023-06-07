const express = require("express");
const router = express.Router();

const {
  validationCreateProduct,
  validationUpdateProduct,
} = require("./validation");
const { isValidId } = require("../../middlewares");

const ctrl = require("../../controllers/products");

router.get("/", ctrl.getAll);

router.get("/bestsellers", ctrl.getBestsellers);

router.get("/:productId", isValidId, ctrl.getById);

router.post("/", validationCreateProduct, ctrl.add);

router.delete("/:productId", isValidId, ctrl.deleteProduct);

router.put("/:productId", isValidId, ctrl.updateById);

router.put(
  "/:productId/isBestseller",
  isValidId,
  validationUpdateProduct,
  ctrl.updateById
);

module.exports = router;
