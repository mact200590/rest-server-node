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
  img: {
    type: String,
  },
});


//To rewrite toJSON method of Document
UserSchema.methods.toJSON = function() {
    const { _id,password,__v , ...user } = this.toObject();
    user.uid=_id;
    return user;
};


module.exports = model("User", UserSchema);
