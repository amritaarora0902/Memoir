const mysql = require('mysql');

function getConnection()
{
    var con =mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Amrita@0902",
        database: "articlesql"
    });
    return con;

}


module.exports.getConnection = getConnection;