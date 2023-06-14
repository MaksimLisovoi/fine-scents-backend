const express = require("express");
const router = express.Router();

const { validationCreateApplyingType } = require("./validation");
const { isValidId } = require("../../middlewares");

const ctrl = require("../../controllers/applyingType");

router.get("/", ctrl.getAllApplyingTypes);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validationCreateApplyingType, ctrl.add);

router.delete("/:id", isValidId, ctrl.deleteApplyingType);

router.put("/:id", isValidId, ctrl.updateById);

module.exports = router;
