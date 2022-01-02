const http = require("http");
const port = 3030;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/hello") {
    res.setHeader("content-type", "text/plan");
    res.end("Hello Geekster");
  } else {
    res.setHeader("content-type", "text/plan");
    res.end("bad request");
   }
});

server.listen(port, hostName, () => {
  console.log(`server is running at http://${hostName}:${port}/`);
});
