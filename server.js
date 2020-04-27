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



router.get('/', (req,res,next) => {
    res.render('editor', {title: "my"});
    next();
});

app.use('/', router);

router.get('/articles', (req,res,next) => {
    res.render('articles', {title: "my"})
});
app.use('/articles', router);


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amrita@0902',
    database: 'www'
});
var a=[];
connection.connect(function(err){
    if(err) throw err;
    console.log('connected');

app.post('/submit', function(req, res) {
    var sql = "INSERT INTO `editor_article` (lang,level,head,blog) VALUES ('"+ req.body.lang + "','"+ req.body.level + "','" + req.body.head + "','" + req.body.blog + "')";
    connection.query(sql, function(err) {
        if(err) throw err
    console.log(req.body);
    // console.log(req.body.head+"...."+req.body.blog);
        res.render('editor', {title: 'datasaved',message:'blog saved'});
    });
    connection.end();
});

// this script to fetch data from MySQL databse table
app.get('/user-list', function(req, res, next) {
    var sql='SELECT * FROM `editor_article`';
    connection.query(sql, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
          }
    
    console.log(results);
    
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