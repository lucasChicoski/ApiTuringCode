const mysql = require('mysql2'); //OBS: Sempre usar o mysql2

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'turingcode',
})

module.exports = connection;