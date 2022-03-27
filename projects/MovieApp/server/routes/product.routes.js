const ProductController = require('../controllers/product.controller');


module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts)

    app.get("/api/products/random", ProductController.findRanProduct)

    app.post("/api/products/new", ProductController.createProduct)

    app.get("/api/products/:id", ProductController.getOneProduct)

    app.put("/api/products/update/:id", ProductController.updateOneProduct)

    app.delete("/api/products/delete/:id", ProductController.deleteOneProduct)
}
