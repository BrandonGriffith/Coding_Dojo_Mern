const UserController = require('../controllers/user.controller');


module.exports = (app) => {
    app.get("/api/users", UserController.findAllUsers)

    app.get("/api/users/random", UserController.findRanUser)

    app.post("/api/users/new", UserController.createUser)

    app.get("/api/users/:id", UserController.getOneUser)

    app.put("/api/users/update/:id", UserController.updateOneUser)

    app.delete("/api/users/delete/:id", UserController.deleteOneUser)
}
