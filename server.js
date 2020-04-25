//jshint esversion:6
//importing npm packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs=require("ejs");
const mysql = require('mysql');
const router = express.Router();

//setting app to express
const app = express();

//setting middlware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.use(express.static('public'));

router.get('/', (req,res,next) => {
    res.render('editor', {title: "my"})
});

app.use('/', router);


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amrita@0902',
    database: 'www'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('connected');

app.post('/submit', function(req, res) {
    var sql = "INSERT INTO `editor` (head,blog) VALUES ('" + req.body.head + "','" + req.body.blog + "')";
    connection.query(sql, function(err) {
        if(err) throw err
        res.render('editor', {title: 'datasaved',message:'blog saved'});
    });
    connection.end();
});

});


















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