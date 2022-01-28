const joi = require('joi');

let schema =joi.object({
    seller_id:joi.number().required(),
    seller_name:joi.string().min(4).required(),
    seller_address:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().min(6).required()

})

module.exports= schema;