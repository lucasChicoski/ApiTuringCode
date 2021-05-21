const mysql = require('mysql2'); //OBS: Sempre usar o mysql2

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'turingcode',
// })

var connection = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10413671',
    password: 'Enei55Z8tL',
    database: 'sql10413671',
})

module.exports = connection;