// requiring express
var express = require("express");
// tells node that I am creating an express server 
var app = express();
// sets an initial port that will be used in listener 
var PORT = process.env.PORT || 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// requiring these route file
require("./routes/routes.js")(app);

// listener to start our server 
app.listen(PORT, function() {
    console.log("App listening localhost: " + PORT);
  });