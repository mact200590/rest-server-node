var bcrypt = require("bcryptjs");
const { request, response } = require("express");
const { generateJWT } = require("../helpers/generate_jwt");
const User = require("../models/user");

const loginUser = async (req = request, res = response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    //   Verify if exist email
    if (!user) {
      return res.status(400).json({
        msg: "User or password are not correct -email",
      });
    }
    //Verify is user is active
    if (!user.state) {
      return res.status(400).json({
        msg: "User or password are not correct -user",
      });
    }

    const correctPassword = bcrypt.compareSync(password, user.password);
    if (!correctPassword) {
      return res.status(400).json({
        msg: "User or password are not correct -password incorrect",
      });
    }
 
    const token = await generateJWT(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

module.exports = {
  loginUser,
};
