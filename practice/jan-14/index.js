const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;
const route = require('./routes/route')

app.use('/',route)

app.listen(port, (err)=>{
    if (err) {
        console.log("error in running the server");
        return;
    }
    console.log(`server is running on http//:127.0.0.1:${port}`);
});
