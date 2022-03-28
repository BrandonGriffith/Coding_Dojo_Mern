const MovieController = require('../controllers/movie.controller');


module.exports = (app) => {
    app.get("/api/movies", MovieController.findAllMovies)

    app.get("/api/movies/random", MovieController.findRanMovie)

    app.post("/api/movies/new", MovieController.createMovie)

    app.get("/api/movies/:id", MovieController.getOneMovie)

    app.put("/api/movies/update/:id", MovieController.updateOneMovie)

    app.delete("/api/movies/delete/:id", MovieController.deleteOneMovie)
}
