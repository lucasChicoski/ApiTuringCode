const { Router } = require('express');
const teste = Router();
const conexao = require('../conexao');

teste.get('/teste', (req,res) => {
    
    

    // conexao.connect()
    // conexao.query('SELECT * FROM users', function (err, results, fiels){
    //     console.log(results);
    //     res.send(results)
    // })
   
})

module.exports = teste;