
const joi = require('joi');

const userSchema = joi.object({
    username:joi.string().min(4).required(),
    email:joi.string().email().required(),
    phone:joi.string().min(10).max(10).required(),
    password:joi.string().min(6).required()
})

module.exports= userSchema;