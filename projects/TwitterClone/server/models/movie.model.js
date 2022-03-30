const mongoose = require('mongoose');


const MovieSchema = new mongoose.Schema({
    Poster: {
        type: String, 
        required: [true, "must have a poster"],
        minlength: [1, "poster is too short"]
    },
    Title: {
        type: String,
        required: [true, "must have a title"],
        minlength: [1, "title is too short"]
    },
    Type: {
        type: String, 
        required: [true, "must have a type"],
        minlength: [1, "type is too short"]
    },
    Year: {
        type: String, 
        required: [true, "must have a year"],
        minlength: [1, "year is too short"]
    },
    imdbID: {
        type: String, 
        required: [true, "must have a imdbID"],
        minlength: [1, "imdbID is too short"]
    },
    },
    {timestamps:true}
)

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
