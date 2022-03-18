const mongoose = require("mongoose");
const setup = "mongodb+srv://root:root@cluster0.gdza0.mongodb.net/";
const db = "JokeAPI";
const settings = "?retryWrites=true&w=majority";


mongoose.connect(`${setup + db + settings}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log("You have a database"))
    .catch(err => console.log("error", err));