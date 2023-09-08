const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/users");
const ctrl = require("../../controllers/auth");
const router = express.Router();

router.post("/register", validateBody(schemas.authSchema), ctrl.register);

router.post("/login", validateBody(schemas.authSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.subSchema),
  ctrl.updateSubscriptionUser
);

module.exports = router;