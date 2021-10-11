const  validateFields  = require("../middleware/validate_field");
const  validateJWT  = require("../middleware/validate_jwt");
const validateRoles  = require("../middleware/validate_rol");


module.exports={
    ...validateFields,
    ...validateJWT,
    ...validateRoles
}