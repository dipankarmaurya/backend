const db = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
function getAllUser(req,res){
    let sql = 'SELECT * FROM user'
    db.query(sql,(err,users,field)=>{
        if(err) throw err;
        res.send(users);
    })
}
//register new user
async function register(req,res){
    const user = req.body;
    var password = user.password
    var salt = await bcrypt.genSalt(10)
    var hashedPassword = await bcrypt.hash(password, salt)
    let sql = `INSERT INTO user (username,email,phone, password) VALUES ('${user.username}','${user.email}','${user.phone}' ,'${hashedPassword}')`
    db.query(sql ,(err,user,field)=>{
        if(err) throw err;
        console.log(user);
        if(user){
            res.send({user,msg:"user created"});
        }
        else{
            res.send({msg:err.message});
        }
    });
}
// login 
async function login(req,res){
let info = req.body;
let sql =`SELECT * FROM user WHERE username ='${info.username}';`;
db.query(sql,async(err,user,field)=>{
    if(err) throw err;
    if(user){
        console.log("user",user)
        let password = info.password;
        let db_password= user[0].password;
        console.log(db_password)
        var if_valid = await bcrypt.compare(password,db_password);
        if(if_valid){
            var payload = {"username":req.body.username, "iat": Date.now()}
                    var secret = 'dipankar'
                    var token = jwt.sign(payload, secret)
                    console.log("token---"+token.toString())
                    res.set("token", token)
                    res.send({"message":"Successfully logged in"})
        } 
        else {
            res.status(400).send({"message":"Incorrect Password/username"})
        }

    }
})
}


module.exports={
    register,
    getAllUser,
    login
}
