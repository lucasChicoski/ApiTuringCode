const express = require('express'); //usado para desenvolver a API REST
const app = express();
const cors = require('cors'); //usado para a conversa entre api e frontEnd

const RotaLogin = require('./routers/login');
const RotaCadastro = require('./routers/cadastro')
const RotaTeste = require('./routers/teste');

app.use(express.json())
app.use(cors());
app.use(RotaLogin);
app.use(RotaTeste);
app.use(RotaCadastro);



app.listen(3333, () =>{
    console.log('💥 Funcionando');
})