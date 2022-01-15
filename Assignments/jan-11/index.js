const express = require('express');
const fs = require('fs');
const app = express();
const parkings = require('./data/parking');
const request = require('request');
app.use(express.json());
//update sheets
// function upDateSheet(parkings) {

//     fs.writeFile("../jan-11/data/parking.js", "var parkings="+JSON.stringify(parkings)+ "\nmodule.exports=parkings ", (err) =>{
//         if (err) {
//             console.log(err)
//             return {"error": err}
//         } else {
//             console.log(
//                 'file updated blog'
//             )
//         }
//     })
// }


app.get('/', (req, res) => {
    res.send(parkings);
})
app.get('/:id', (req, res) => {
    let id = req.params.id;
    let slot;
    parkings.forEach((s) => {
        if (s.slot_id == id) {
            slot = s;
        }
    })
    if (!slot) {
        res.status(400).send({ msg: "user with this id not found" });
        return;
    }
    res.send(slot);
})
 
app.post('/bookslot', (req, res) => {
    let sampleData =
    {
       data: req.body,
       payement: 200
    }
    console.log(req.body);
    let options = {
        url:"/payments",
        method: "POST",
        body:sampleData
    }
    request(options, (err, response, body) => {
        console.log(body);
        // let data = JSON.parse(body);
        // console.log(data);
        res.send(body);
    })
})

app.listen(8000, (err) => {
    if (err) {
        throw err;
    }
    console.log(`server is running of port 8000`);
})

