const express = require("express");
const ctrl = require("../../controllers/auth");
const { validatiionCreateUser, validatiionLoginUser } = require("./validation");
const { authenticate } = require("../../middlewares");
const router = express.Router();

router.post("/register", validatiionCreateUser, ctrl.register);

router.post("/login", validatiionLoginUser, ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
