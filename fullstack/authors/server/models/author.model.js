const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Must have a first name"],
        minlength: [3, "First name is too short"]
    },
    lastName: {
        type: String,
        required: [true, "Must have a last name"],
        minlength: [3, "Last name is too short"]
    },
    quote: {
        type: String,
        required: [true, "Must have a quote"],
        minlength: [5, "Quote is too short"]
    },
    },
    {timestamps:true}
)

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;