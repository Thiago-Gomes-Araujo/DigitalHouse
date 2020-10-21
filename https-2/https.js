const express = require('express');
const router = express.Router();
const app = express();
app.listen(32,() => console.log("Levantando um servidor com Express"));


// Rotas 
app.get('/home',function(req,res){
    res.send('Listar Filmes Aqui')
});