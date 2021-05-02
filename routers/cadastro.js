const { json } = require('body-parser');
const { Router } = require('express');
const cadastro = Router();
const connection = require('../conexao');



cadastro.post('/cadastro', (req, res) => {

    var dadosUser = req.body;

    var nome = dadosUser.nome;
    var sobrenome = dadosUser.sobrenome;
    var pontodeinteresse = dadosUser.pontodeinteresse;
    var email = dadosUser.email;
    var senha = dadosUser.senha;


    // console.log(dadosUser.nome)
    //connection.connect();

    connection.query(`INSERT INTO users(nome, sobrenome, email, senha, pontodeinteresse) 
    VALUES( 
        '${nome}',
        '${sobrenome}',
        '${email}' ,
        '${senha}',
        '${pontodeinteresse}')`,
        function (error, results, fields) {
            if (error) {
                console.log(error)
            } else {
                res.send("cadastrado com sucesso");
            }
        })

   //no connection.end();

})

module.exports = cadastro;