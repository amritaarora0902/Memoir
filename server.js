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



var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amrita@0902',
    database: 'www'
});
var ar=[];
// var co=[];
// var puz=[];

connection.connect(function(err){
    if(err) throw err;
    console.log('connected');


//insert data to mysql    
app.post('/submit', function(req, res) {
    // var text=req.body.blog;
    if(req.body.theme === 'Article'){
        var sql = "INSERT INTO `Articles` (Lang,Level,Head,Blog) VALUES ('" + req.body.lang + "','" + req.body.level + "','" + req.body.head + "','" + req.body.blog + "')";
        connection.query(sql, function(err) {
            if(err) throw err
        console.log(req.body);
            res.render('editor', {title: 'datasaved',message:'blog saved'});
        });
    }
    if(req.body.theme === 'Puzzle'){
        var sql = "INSERT INTO `Puzzle` (Lang,Level,Head,Blog) VALUES ('" + req.body.lang + "','" + req.body.level + "','" + req.body.head + "','" + req.body.blog + "')";
        connection.query(sql, function(err) {
            if(err) throw err
        console.log(req.body);
            res.render('editor', {title: 'datasaved',message:'blog saved'});
        });
    }
    if(req.body.theme === 'Code'){
        var sql = "INSERT INTO `Code` (Lang,Level,Head,Blog) VALUES ('" + req.body.lang + "','" + req.body.level + "','" + req.body.head + "','" + req.body.blog + "')";
        connection.query(sql, function(err) {
            if(err) throw err
        console.log(req.body);
            res.render('editor', {title: 'datasaved',message:'blog saved'});
        });
    }
   
    // connection.end();
});

// this script to fetch data from MySQL databse table
app.get('/articles/:type', function(req, res, next) {
    var t=req.params.type;

    if(t==="article"){
    var sql1='SELECT * FROM `Articles`';
    connection.query(sql1, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
          }
          ar=results;
    //  console.log(ar);
    
     res.render('Articles',{posts1:ar,theme:t});

  });

    }

else if(t==="code"){
    var sql2='SELECT * FROM `Code`';
    connection.query(sql2, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
          }
          ar=results;
    //  console.log(co);
    //  res.render('Articles',{posts1:ar,posts2:co,posts3:puz});
    res.render('Articles',{posts1:ar,theme:t});
  });
}

else if(t==="puzzle"){
var sql3='SELECT * FROM `Puzzle`';
  connection.query(sql3, (err, results, fields) => {
      if (err) {
          return console.error(err.message);
        }
        ar=results;
//    console.log(puz);
   res.render('Articles',{posts1:ar,theme:t});
  
});

//   connection.end();
}
  


});

app.get("/posts/:type-:postName",(req,res)=>{
    const reqPost=req.params.postName;
    const theme=req.params.type;
        ar.forEach((post)=>{
            if(post.Head===reqPost){
                res.render('post',{Head:post.Head,Body:post.Blog,Lang:post.Lang,Lvl:post.Level,type:theme,postId:post.Id});
            }
        });
});


app.get('/delete/:type-:postId',(req,res)=>{
    // res.write("post of "+req.params.type+" ID "+req.params.postId+" deleted");
    res.redirect('/articles/'+req.params.type+'/');
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