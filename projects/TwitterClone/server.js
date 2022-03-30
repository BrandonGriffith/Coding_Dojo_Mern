const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
require('dotenv').config();


app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( cors() );


require("./server/config/mongoose.config");
require("./server/routes/movie.routes")(app);


app.listen( port );