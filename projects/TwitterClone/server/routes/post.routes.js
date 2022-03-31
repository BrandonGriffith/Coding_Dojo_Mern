const PostController = require('../controllers/post.controller');


module.exports = (app) => {
    app.get("/api/posts", PostController.findAllPosts)

    app.get("/api/posts/random", PostController.findRanPost)

    app.post("/api/posts/new", PostController.createPost)

    app.get("/api/posts/:id", PostController.getOnePost)

    app.put("/api/posts/update/:id", PostController.updateOnePost)

    app.delete("/api/posts/delete/:id", PostController.deleteOnePost)

    app.get("/api/posts/user/:id", PostController.findPostsForUser)
}
