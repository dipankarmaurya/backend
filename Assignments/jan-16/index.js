const express = require('express');
global.joi= require('joi');
const app= express();
const sellerRoute = require('./router/sellerRutes');
app.use(express.json());

app.use('/sellers',sellerRoute);

app.listen(8000,(err)=>{
    if(err) throw err;

    console.log(`server is running at http://localhost:8000`);
})