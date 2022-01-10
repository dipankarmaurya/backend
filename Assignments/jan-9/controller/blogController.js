// const { arrayBuffer } = require('stream/consumers');
const blogs = require('../model/blog');
console.log()
function findById(id) {
    let finedBlog;
    blogs.forEach((blog) => {
    
        if (blog.id == id) {
            finedBlog= blog;
        }
    })
    return finedBlog;
}

function findByIdAndUpdateTitle(id,title) {
let blog = findById(id);
blog.title=title;
    return blog;
}

function findByIdAndDelete(id) {
   return  blogs.filter(blog => blog.id != id);
}

module.exports = {
    findById,
    findByIdAndUpdateTitle,
    findByIdAndDelete
}