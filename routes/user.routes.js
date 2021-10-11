const { Router, response } = require("express");
const { check } = require("express-validator");
const {
  validateRole,
  emailExist,
  existUserId,
} = require("../helpers/db_validator");
const {
  getUsers,
  putUser,
  postUser,
  patchUser,
  deleteUser,
} = require("../controls/user.controls");

const {
  validateFields,
  validateJWT,
  isAdmin,
  haveRole,
} = require("../middleware/index");

const router = Router();

router.get("/", getUsers);
router.put(
  "/:id",
  [
    check("id", "The id provided is not valid").isMongoId(),
    check("id").custom(existUserId),
    check("role").custom(validateRole),
    validateFields,
  ],
  putUser
);
router.post(
  "/",
  [
    check("name", "The name is required").not().isEmpty(),
    check("email", "The email is no correct").isEmail(),
    check("email", "The email is no correct").custom((email) =>
      emailExist(email)
    ),
    check(
      "password",
      "The password should contains more than 6 letters"
    ).isLength({ min: 6 }),
    check("role").custom(validateRole),
    validateFields,
  ],
  postUser
);
router.patch("/", patchUser);
router.delete(
  "/:id",
  [
    validateJWT,
    haveRole("ADMIN_ROLE", "SELL_ROLE"),
    // isAdmin,
    check("id", "The id provided is not valid").isMongoId(),
    check("id").custom(existUserId),
    validateFields,
  ],
  deleteUser
);

module.exports = router;
