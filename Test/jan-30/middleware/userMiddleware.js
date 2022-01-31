const jwt = require('jsonwebtoken');
const userSchema = require('../model/validator')

function validateUser(req,res,next){
    let user = req.body;
    let if_valid = userSchema.validate(user);
    if(if_valid){
        console.log("valid user");
        next();
    }
    else{
        res.send({message:"invalid user"});
    }
}

function authUser(req, res, next) {
    console.log("validating")
    var token = req.headers['authorization'].split('Bearer ')[1]

    try {
        var re = jwt.verify(token,'dipankar')
        res.send(`hellow ${re.username}`)
        next()
    } catch(e) {
        console.log("??"+e)
        return {"error":e}
    }
}
module.exports={
    validateUser,
    authUser
}