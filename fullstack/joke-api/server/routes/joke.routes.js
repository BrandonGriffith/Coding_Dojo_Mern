const JokeController = require('../controllers/joke.controller');


module.exports = (app) =>{
    app.get("/api/jokes", JokeController.findAllJokes)

    app.get("/api/jokes/random", JokeController.findRanJoke)

    app.post("/api/jokes/new", JokeController.createJoke)

    app.get("/api/jokes/:id", JokeController.getOneJoke)

    app.put("/api/jokes/update/:id", JokeController.updateOneJoke)

    app.delete("/api/jokes/delete/:id", JokeController.deleteOneJoke)
}
