
let allBlogs = require('../controller/blog');
console.log(allBlogs)
let routes = function routes(req,res) {
    if (req.url == '/getAllBlogs') {
         res.writeHead(200, "Content-Type:text/plain")
         res.write(JSON.stringify(allBlogs))
        console.log(allBlogs)
        res.end();
    }
    else {
        res.end("bad request")
    }
   
 }
module.exports=routes

