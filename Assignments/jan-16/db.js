const mysql = require('mysql');

const connection = mysql.createConnection({
    user:'root',
    password:'password',
    host:'localhost',
    database:'amazon_selleres'
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('mysql database connected');
})

module.exports=connection;