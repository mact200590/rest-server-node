const jwt = require("jsonwebtoken");

const generateJWT = (ui = "") => {

    
  return new Promise((resolve, reject) => {
    const payload = {ui};
    jwt.sign(
      payload,
      process.env.SECRET_OR_PRIVATE_KEY,
      {
        expiresIn: "4h",
      },
      (error, token) => {
        if (error) {
            reject("We can't generate the JWT")
        }
        else{
            resolve(token);
        } 
      }
    );
  });
};

module.exports = {
  generateJWT,
};
