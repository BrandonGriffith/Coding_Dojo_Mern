const UserController = require('../controllers/user.controller');


module.exports = (app) => {
    app.get("/api/users", UserController.findAllUsers)

    app.post("/api/users/register", UserController.register)

    app.post("/api/users/login", UserController.login)

    app.get("/api/users/getloggedinuser", UserController.getLoggedInUser)

    app.get("/api/users/logout", UserController.logout)

    app.post("/api/users/new", UserController.createUser)

    app.get("/api/users/:id", UserController.getOneUser)

    app.put("/api/users/update/:id", UserController.updateOneUser)

    app.delete("/api/users/delete/:id", UserController.deleteOneUser)
}
