//jshint esversion:6
//importing npm packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs=require("ejs");

//setting app to express
const app = express();

//setting middlware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/",function(req,res){
    // res.sendFile(__dirname+"/public/editor.html");
    res.render("editor");
    // res.sendFile(__dirname+"/ckeditor/ckeditor.js");
});
app.post("/",function(req,res){
    console.log(req.body);
    var head=req.body.heading;
    var body=req.body.blogbody;
    console.log(head+"...."+body);


    //here add sql and put the above variables for testing



});



// app.get("/ckeditor/ckeditor.js",function(req,res){
//     res.sendFile(__dirname+"/ckeditor/ckeditor.js");
// });
// app.get("/",function(req,res){
//     res.redirect(__dirname+'/public/editor.html');
// })

















app.listen(3000, function() {
    console.log("Server started on port 3000");
  });





























  // const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const con = require('./DbConnection');


// const hostname = '127.0.0.1'
// const port = '3000'

// http.createServer(function(req, res){

//     if(req.url === "/"){
//     fs.readFile("./public/editor.html", "UTF-8", function(err,html)
//     {
//         res.writeHead(200, {"Content-type": "text/html"});
//         res.end(html);
        
//     });
//    }
//     else if(req.url.match("\.css$"))
//     {
//         var cssPath = path.join(__dirname,'public',req.url);
//         var fileStream = fs.createReadStream(cssPath, "UTF-8");
//         res.writeHead(200, {"Content-Type": "text/css"});
//         fileStream.pipe(res);
//     }
//     else if(req.url.match("\.js$"))
//     {
//         res.writeHead(200, {"Content-type": "text/javascript"});
//         fs.createReadStream("./functions.js").pipe(res);
//     }
//     else if(req.url.match("\.js$"))
//     {
//         res.writeHead(200, {"Content-type": "text/javascript"});
//         fs.createReadStream("./ckeditor/ckeditor.js").pipe(CKEDITOR.replace('content'));
        
//     }
//     else if(req.url.match('/home'))
//     {
//         res.statusCode == 200;
//         res.setHeader('Content-Type','application/json');
//         var conn = con.getConnection();
//         conn.query('SELECT * FROM articlesql.new_table',function(error,results,fields){
//             if(error) throw error;
//             var articles = JSON.stringify(results);
//             res.end(articles);
//             });
        
//         conn.end();
//         }
    
   

//     console.log(req.url);
// }).listen(3000);