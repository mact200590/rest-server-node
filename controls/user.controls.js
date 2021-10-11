var bcrypt = require("bcryptjs");
//this is for helping to complete code
const { response, request } = require("express");
const { validationResult } = require("express-validator");
const User = require("../models/user");

const getUsers = async (req = request, res = response) => {
  const { limit = 3, from = 0 } = req.query;

  //TODO: This await block the code, so is not optimal
  // const users = await User.find().skip(Number(from)).limit(Number(limit));
  // const total = await User.count({ state: true });
  const [total, users] = await Promise.all([
    User.countDocuments({ state: true }),
    User.find().skip(Number(from)).limit(Number(limit)),
  ]);

  res.json({
    total,
    users,
  });
};
const putUser = async (req = request, res) => {
  const { id } = req.params;

  const { _id, google, email, password, ...rest } = req.body;

  if (password) {
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }
  const userUpdate = await User.findByIdAndUpdate(id, rest);

  res.json({
    ok: true,
    msg: "The user was update",
    userUpdate,
  });
};

const postUser = async (req = request, res = response) => {
  const { name, password, email, role } = req.body;
  const user = new User({ name, password, email, role });

  //Encrypted in BaseData
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);

  //Save DataBase
  await user.save();

  res.json(user);
};

const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;
  //Delete physical in DB
  // const user=await User.findByIdAndDelete(id);

  const user = await User.findByIdAndUpdate(id, { state: false });
  const userAuthenticate = req.user
  res.json({
    user,
    userAuthenticate,
  });
};
const patchUser = (req, res) => {
  res.json({
    ok: true,
    msg: "patch api",
  });
};

module.exports = {
  getUsers,
  putUser,
  postUser,
  deleteUser,
  patchUser,
};
