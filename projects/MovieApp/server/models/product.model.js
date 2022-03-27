const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "must have a title"],
        minlength: [2, "title is too short"]
    },
    price: {
        type: Number,
        required: [true, "must have a price"],
        min: [0.01, "punchLine is too short"]
    },
    description: {
        type: String, 
        default: "unknown",
        required: [true, "must have a description"],
        minlength: [2, "description is too short"]
    },
    },
    {timestamps:true}
)

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
