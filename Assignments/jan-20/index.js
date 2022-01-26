const express = require('express');
const mysql=require('mysql');
const app= express();
app.use(express.json());
var db_params = {
    user: 'root',
    password: 'password',
    host: 'localhost',
    database: 'user'
}
var connection=mysql.createConnection(db_params);

connection.connect((err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("connect to db");
    }
})

app.listen(8000,(err)=>{
    if(err){
        throw err;
    }
    console.log(`server is running on http://localhost:8000`);
})
let getAllEmployees= (callback)=>{
    connection.query('SELECT * FROM employees',(err,results,field)=>{
        if(err) throw err;

        console.log(results);
        callback(results);
    })
}


app.get('/employees',(req,res)=>{
    getAllEmployees((employees)=>{
          res.send(employees);
    })
})

//create employee
app.post('/createEmployee',async (req,res)=>{
    let data= req.body;
    
    let query = `insert into employees values (${data.emp_id},'${data.first_name}','${data.last_name}','${data.email}','${data.phone}','${data.hire_date}','${data.job_id}','${data.salary}','${data.department}');`
     let {result,field} = await connection.query(query);
     console.log(result)
     if(result!=undefined){
         res.send(result)
     }
     else{
         res.send({msg:"can not create"})
     }
})

// find by id and update employee first & last name 

app.post('/employee/:id',async(req,res)=>{
    let id = req.params.id;
    let data= req.body;
    // let {user,field} =await connection.query(`select *from employees where emp_id=${id};`);
    // console.log(user,field);
// console.log(data);
    connection.query(`update employees set first_name='${data.first_name}',last_name='${data.last_name}' where emp_id=${id};`,(err,user,field)=>{
        console.log(user);
        res.send({msg:"user updated"})
    });
})


// find by id and delete
app.post('/deleteEmployee/:id',async(req,res)=>{
    let id = req.params.id;
    connection.query(`delete from employees where emp_id=${id};`,(err,user,field)=>{
        console.log(user)
         res.send({msg:"user deleted"})
    });
})