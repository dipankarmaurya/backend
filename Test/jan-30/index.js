
const express= require('express');
const app = express();
const user = require('./router/userRoutes')
app.use(express.json());
app.use('/users',user);
app.listen(8000,(err)=>console.log("server is up on port 8000"));