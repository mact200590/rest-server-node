const { Router, response } = require("express");
const { check } = require("express-validator");
const { loginUser } = require("../controls/auth.controls");
const { validateFields } = require("../middleware/validate_field");

const router = Router();

router.post(
  "/login",
  [
    check("email", "The email is not valid").isEmail(),
    check("password", "The password can be empty").not().isEmpty(),
    validateFields,
  ],
  loginUser
);

module.exports = router;
