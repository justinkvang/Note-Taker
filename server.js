// requiring express
const express = require("express");
const fs = require("fs");
const path = require("path");
// tells node that I am creating an express server 
const app = express();
// sets an initial port that will be used in listener 
const PORT = process.env.PORT || 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// requiring these route file
require("./routes/routes")(app);

// listener to start our server 
app.listen(PORT, function() {
    console.log("App listening localhost: " + PORT);
  });