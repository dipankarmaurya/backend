const express = require("express");
const app = express();
const port = 3030;
const blogs = require("./controller/blogController");
app.use(express.json());

// get blog by id
app.get("/blog/:id", (req, res) => {
    console.log(req.params.id);
    let blog = blogs.findById(req.params.id);
    
    console.log(blog)
  try {
    if (!blog) {
      res.status(400).send({ msg: "blog not found" });
      return;
    }
    res.status(200).send(blog);
  } catch (e) {
    res.status(500).send({ msg: "error in finding the blog" });
  }
});

// find the blog by id and update update the title of the blog 
app.put('/blog/:id', (req, res)=>{
    let id = req.params.id;
    let title = req.body.title;
    console.log(req.body)
    let updatedblog = blogs.findByIdAndUpdateTitle(id, title);
    try {
        if (!updatedblog) {
          res.status(400).send({ msg: "blog not found" });
          return;
        }
        res.status(200).send(updatedblog);
      } catch (e) {
        res.status(500).send({ msg: "error in updating the blog" });
      }
})

//find By id and delete blog
app.delete('/blog/:id', (req, res) => {
 
    let updatesBlogLists = blogs.findByIdAndDelete(req.params.id);
    try {
        if (!updatesBlogLists.length) {
          res.status(400).send({ msg: "blog not found" });
          return;
        }
        res.status(200).send(updatesBlogLists);
      } catch (e) {
        res.status(500).send({ msg: "error in deleting the blog" });
      }
    
})

app.listen(port, (e) => {
  if (e) {
    console.log(`error in running server on port ${port}`);
    return;
  }
  console.log(`server is running on http//:127.0.0.1:${port}`);
});
