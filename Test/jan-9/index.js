const express = require('express');
const app = express();
const port = 3030;
const employees = require('./controller/employees');
app.use(express.json());

// find all employee by role
app.get('/employees/:role', (req, res) => {
    // console.log(employees.employees)
    let role = req.params.role;
   let Emp=  employees.getByrole(role)
    try {
        if (Emp.length == 0) {
            res.status(404).send( { msg: "no user found" })
            return;
        }
        res.status(200).send({Emp}) 
    } catch (e) {
        res.status(500).send("not found")
    }
   
})
// find by id
app.get('/employee/:id', (req, res) => {
    let id = req.params.id;
   let Emp=  employees.getById(id)
    try {
        if (Emp.length == 0) {
            res.status(404).send( { msg: "no user found" })
            return;
        }
        res.status(200).send({Emp}) 
    } catch (e) {
        res.status(500).send("not found")
    }
   
})



app.listen(port, (err)=>{
    if (err) {
        console.log("eroor in running on server");
        return;
    }
    console.log(`server is running on http//:127.0.0.1:${port}`);
})