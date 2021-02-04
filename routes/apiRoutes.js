var userNotes = require("../db.json");


module.exports = function(app){
   app.get("/api/notes", function(req, res){
    return res.json(userNotes);
   });

   app.post("/api/notes", function(req, res){
    var newNotes = req.body;
    
    console.log(newNotes);
  
    res.json(newNotes);
   });

   app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    userNotes = [];
    res.json({ ok: true });
  });
};

