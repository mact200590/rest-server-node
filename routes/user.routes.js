const { Router } = require("express");
const { getUsers, putUser, postUser, patchUser, deleteUser } = require("../controls/user.controls");

const router = Router();

router.get("/",getUsers);
router.put("/:id", putUser);
router.post("/",postUser );
router.patch("/", patchUser)
router.delete("/", deleteUser);

module.exports = router;
