
const express = require('express');
const db = require('../db/db');
const usermiddleware= require('../middleware/userMiddleware');
const userController = require('../controller/userController.js');
const user = express();

user.post('/register',usermiddleware.validateUser,userController.register);
user.get('/',userController.getAllUser);
user.post('/login',userController.login)

user.get('/home',usermiddleware.authUser)

module.exports= user;