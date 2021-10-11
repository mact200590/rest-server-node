const { validationResult } = require("express-validator");
const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validateJWT = async (req = request, res = response, next) => {
  const jwtHeader = req.header("x-token");
  console.log(jwtHeader);
  if (!jwtHeader) {
    return res.status(403).json({
      msg: "The jwt is no valid at all",
    });
  }
  try {
    const { ui } = jwt.verify(jwtHeader, process.env.SECRET_OR_PRIVATEKEY);
    const user = await User.findById(ui);
console.log("user",user)
    if (!user) {
      res.status(401).json({
        msg: "The user state is already delete from DB",
      });
    }

    //Verify tha is mark as true to them can delete
    if (!user.state) {
      res.status(401).json({
        msg: "The user state is already in false -so",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "JWT is not valid",
    });
  }
};

module.exports = {
  validateJWT,
};
