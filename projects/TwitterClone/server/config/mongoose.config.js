const mongoose = require("mongoose");
const setup = process.env.MONGODB;
const db = "movie-app-db";
const settings = "?retryWrites=true&w=majority";


mongoose.connect(`${setup + db + settings}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log("You have a database"))
    .catch(err => console.log("error", err));