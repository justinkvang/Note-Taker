// path is a built in node function. 
// path is used to get the correct file path for our html
const path = require("path");
// fs (file system) is a built in node function
// I will be using fs.readFile for the db.json file
const fs = require("fs");

// module.exports tells node which bit of code to export from a given file so other files are allowed to access the exported code
module.exports = function(app) {
    fs.readFile("db/db.json","utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);
    
    // API ROUTES
    // api notes get route
    app.get("/api/notes", function(req, res){
     return res.json(notes);
    });

   // api notes post route
   app.post("/api/notes", function(req, res){
    var newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("added new note: " + newNote.title);
   });

   // get specfic note by id
   app.get("/api/notes/:id", function(req, res){
       res.json(notes[req.params.id]);
   });

   // deletes a specifc note with id 
   app.delete("/api/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("deleted note with id " + req.params.id);
   }); 
   
   // HTML ROUTES
    // .get requests the html page
    // home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // notes page
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // updates json file when a note is added/deleted
    function updateDb(){
        fs.writeFile("db/db.json", JSON.stringify(notes,'\t'), err => {
            if (err) throw err;
            return true;
        });
    }
});
}
