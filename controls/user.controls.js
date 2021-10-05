//this is for helping to complete code
const { response, request } = require("express");

const getUsers = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "get api",
  });
};
const putUser = (req=request, res) => {
    const {id}=req.params;
  res.json({
    ok: true,
    msg: "put api",
    id
  });
};

const postUser = (req = request, res) => {
  const { name, age } = req.body;
  const body = req.body;
  console.log("body", body);
  res.json({
    msg: "post api",
    name,
    age,
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
