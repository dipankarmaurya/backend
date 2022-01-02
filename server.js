const http = require("http");
const port = 3000;
const hostName = "0.0.0.0";
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/plan");
  res.end("Hello Geekster");
});

server.listen(port, hostName, () => {
  console.log(`server is running at http://${hostName}:${port}/`);
});
