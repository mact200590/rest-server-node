//this is for helping to complete code
const { response, request } = require("express");
const User = require("../models/user");

const getUsers = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "get api",
  });
};
const putUser = (req = request, res) => {
  const { id } = req.params;
  res.json({
    ok: true,
    msg: "put api",
    id,
  });
};

const postUser = async (req = request, res) => {
  const body = req.body;
  const user = new User(body);
 await user.save();
  res.json({
    msg: "post api",
    user,
  });
};

const deleteUser = (req, res) => {
  res.json({
    ok: true,
    msg: "delete api",
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
