const sellerSchema = require('../validator')

function middleware(req,res,next){
    // console.log("middleware added");
      let if_validate =sellerSchema.validate(req.body);
     if(if_validate.error){
         console.log(if_validate.error.message)
         res.status(400).send({msg:if_validate.error.message})
     }
     else{
       console.log(if_validate);
        next();
     }

}
module.exports=middleware;