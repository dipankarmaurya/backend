const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;

let  jsonObject  = fs.readFileSync('./dummyData.txt', 'utf8',(err)=>{
    console.log(err);
});
const parkingSlots = (JSON.parse(jsonObject))
let arrKeys = Object.keys(parkingSlots);
console.log(arrKeys); 
// console.log(user.toString());
app.get('/', (req, res) => {
    
    res.send(filterSlot)
})

app.get('/:id', (req, res) => {
    let id = req.params.id;
    let slot = arrKeys.filter((key) => {
        return key.id != id
    })
    res.send(slot);
})



app.listen(port, (err)=>{
    if (err) {
        console.log("error in running the server");
        return;
    }
    console.log(`server is running on http//:127.0.0.1:${port}`);
})