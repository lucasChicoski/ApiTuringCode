const { json } = require('body-parser');
const { Router } = require('express');
const login = Router();
const connection = require('../conexao');

login.post('/login', async (req, res) => {

    var dadosUser = req.body
    console.log(dadosUser);


    var email = dadosUser.email;
    var senha = dadosUser.senha;

    connection.connect()
    
    connection.query('SELECT * FROM users', function (err, results, fiels) {
        

        if (err) {
            throw err
        }

        var sqlResultToString = JSON.stringify(results)
        var sqlResultToJson = JSON.parse(sqlResultToString)


        if (email == sqlResultToJson[0].email && senha == sqlResultToJson[0].senha) {
            console.log('email e senha valido');
            res.send('Login efetuado!');

        } else {
            res.send('senha ou email incorreto');
            console.log('email ou senha incorreto');
        }
        
    })
   

})


module.exports = login;
