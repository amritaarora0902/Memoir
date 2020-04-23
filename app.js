const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amrita@0902',
})

//Connect
db.connect((err) => {
    if(err){
        throw err;

    }
    console.log('Mysql connected');
})

const app = express();

//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE articlesql1';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created');
    });
});

//Create table
app.get('/createtable', (req, res) => {

    let sql = 'USE articlesql1';'CREATE TABLE articles(id int AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), body VARCHAR(255))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('table created');
    }); 
});

app.listen('3000', () => {
    console.log('Server started at 3000');
});