const mysql = require('mysql');
const { connect } = require('../../../Assignments/jan-16/db');


const connection =mysql.createConnection({
    user:'root',
    password:'password',
    host:'localhost',
    database:'test'
})

connection.connect((e)=>console.log('connect to database'));

module.exports=connection;