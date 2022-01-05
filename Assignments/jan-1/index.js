// "1. Create a module named blogging.js, define :-
//     a. Object as blogs =
//     [
//         { 1: {'title':'NodeJS Tutorial', 'content xyz'},
//         { 2: {'title':'NodeJS Tutorial Advance', 'content abc'}
//     ]
//     b. Functions named as getAllBlogs which returns all blogs data
// 2. Create an index.js file, create an http server. Use the blogging.
//    js module inside index.jsserver
//      and send its data as response."

const http = require('http');
const host = '127.0.0.1';
const port = 3000; 
const routes = require('./router/getblog');

http.createServer((req, res) => {
    routes(req,res);
}).listen(port,host, () => {
    console.log(`Started server on http://${host}:${port}`)
});
