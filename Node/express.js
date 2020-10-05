//Configurando Servidor com EXPRESS

const express = require('express');
const router = express.Router();
const app = express();
app.listen(8000,() => console.log("Levantando um servidor com Express"));


// Rotas 
app.get('/home',function(req,res){
    res.send('Olá, estamos na página home')
});

app.get('/usuario',function(req,res){
    res.send('Usuários')
});

// Usando Variaveis nas rotas
const boasVindas = "Bem vindo/a, aqui estamos em seu perfil"
app.get('/perfil',function(req,res){
    res.send(boasVindas)
});

const produto = {
    tipoProduto: null,
    preco: null,
    quantidade: null
};

app.get('/produto/adicionar',function(req,res){
    res.send(produto)
});

app.post('/produto/criar',function(req,res){
    res.send({tipoProduto:"living", preco: 1245, quantidade: 300})
   
});

// Rotas parametrizadas
const series = [ 
{ "id": 1, "name": "Friends" }, 
{ "id": 2, "name": "Breaking Bad" }, 
{ "id": 3, "name": "Dexter" }, 
{ "id": 4, "name": "Six Feet Under" } ]
//app.get('/series',(req,res) =>{
//    res.send(series)
//
//});



app.get('/serie/:id',(req,res) =>{
    let {id} = req.params;
    series.filter(function(series)
    {
         if( series.id == id){
            res.send (series.name)
            return console.log (series.name)
         }
    });
});
