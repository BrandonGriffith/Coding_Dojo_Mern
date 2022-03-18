const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "must have a setup"],
        minlength: [2, "setup is too short"]
    },
    punchLine: {
        type: String,
        required: [true, "must have a punchLine"],
        minlength: [2, "punchLine is too short"]
    },
    },
    {timestamps:true}
)

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
