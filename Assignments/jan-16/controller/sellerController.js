const db = require('../db');
const seller = require('../router/sellerRutes');

function getAllsellers(req,res){
    db.query('select * from sellers',(err,sellers,field)=>{
        if(!err && sellers!=undefined){
            res.send(sellers)
        }
        else{
            res.send({msg:"sellers not found"});
        }
        
    })
}

function createSeller(req,res){
    let data= req.body;
    let query = `insert into sellers values(${data.seller_id},'${data.seller_name}','${data.seller_address}','${data.email}','${data.password}');`
    db.query(query,(err,seller,field)=>{
        if(seller!=undefined){
            res.send(seller)
        }
        else
        res.send({msg:"seller created"});
    })
}

//get seller by id and update
function findByIdAndUpdate(req,res){
    let id = req.params.id;
    let data = req.body;
   let  query = `UPDATE sellers SET seller_name='${data.seller_name}',email='${data.email}' WHERE seller_id=${id}`;
   db.query(query,(err,seller,result)=>{
       console.log(seller);
    if(seller!=undefined){
        res.send(seller)
    }
    else
    res.send({msg:"seller updated"});
   })
}

function findByIdAndDelete(req,res){
    let id = req.params.id;
    let query= `DELETE FROM Sellers WHERE seller_id=${id}`
    db.query(query,(err,seller,result)=>{
        console.log(seller);
     if(seller!=undefined){
         res.send(seller)
     }
     else
     res.send({msg:"seller deleted"});
    })
}

module.exports={
    getAllsellers,
    createSeller,
    findByIdAndUpdate,
    findByIdAndDelete
};