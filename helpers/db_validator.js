const Role = require("../models/roles");
const User = require("../models/user");

const validateRole = async (role = "") => {
  const roleExist = await Role.findOne({ role });
  if (!roleExist) {
    throw new Error(`The role ${roleExist} dont exist in Db`);
  }
};

const emailExist = async (email = "") => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(` The email ${email} already exist`);
  }
};

const existUserId = async (id = "") => {
  const userExist = await User.findById(id);
  if (!userExist) {
    throw new Error(`The user with ${id} don't exist in Db`);
  }
};

module.exports = {
  validateRole,
  emailExist,
  existUserId
};
