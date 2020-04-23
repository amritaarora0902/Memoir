const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    // res.sendFile(__dirname+"/editor.html");
    res.render("editor.ejs");
});

app.post("/",function(req,res){
 var bName =req.body.blogheading;
 var bBody=req.body.blogcontent;
 res.write(bName);
 res.write(bBody);
 res.send();
});






















app.listen(3000, function() {
    console.log("Server started on port 3000");
  });