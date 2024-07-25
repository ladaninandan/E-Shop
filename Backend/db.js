const mysql = require('mysql');


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'e-cart'
});

db.connect((err) => {
    if (err) {
        console.log("Connection error")
    }
});

module.exports = db;