// const { arrayBuffer } = require('stream/consumers');
const blogs = require('../model/blog');
const fs = require('fs');

// updating blog model after updating and deleting 
function upDateSheet(blogs) {

    fs.writeFile("../jan-9/model/blog.js", "var blogs="+JSON.stringify(blogs)+ "\nmodule.exports=blogs ", (err) =>{
        if (err) {
            console.log(err)
            return {"error": err}
        } else {
            console.log(
                'file updated booking'
            )
        }
    })
}
function findById(id) {
    let finedBlog;
    blogs.forEach((blog) => {
    
        if (blog.id == id) {
            finedBlog= blog;
        }
    })
    if (!finedBlog) {
        console.log("blog not find");
        return;
    }
    return finedBlog;
}

function findByIdAndUpdateTitle(id,title) {
    let blog = findById(id);
    if (!blog) {
        console.log("blog not found");
        return;
    }
    blog.title = title;

    // console.log(blogs);
    upDateSheet(blogs)
    return blog;

}

function findByIdAndDelete(id) {
    let newBlogs = blogs.filter(blog => blog.id != id);
    if (newBlogs.length == blogs.length) {
        console.log("blog not found ");
        return;
    }
    upDateSheet(newBlogs);
    return newBlogs;
    
}

module.exports = {
    findById,
    findByIdAndUpdateTitle,
    findByIdAndDelete
}