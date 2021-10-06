const { Schema, model } = require("mongoose");
const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is require"],
  },
  email: {
    type: String,
    required: [true, "The name is require"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "The name is require"],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: [true, "The name is require"],
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("User", UserSchema);
