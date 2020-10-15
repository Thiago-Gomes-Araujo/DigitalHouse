const express = require('express');
const app = express();
app.listen(8001,() => console.log("Levantando um servidor com Express"));

const series = [ 
    { "id": 1, "name": "Friends" }, 
    { "id": 2, "name": "Breaking Bad" }, 
    { "id": 3, "name": "Dexter" }, 
    { "id": 4, "name": "Six Feet Under" } ];


    
    app.get('/produto/adicionar/:nome/:preco/:qtn/:codigo',function(req,res){
        let nome = req.params.nome;
        let preco = req.params.preco;
        let qtn = req.params.qtn;
        let codigo = req.params.codigo;
        

        const produto = {
            nome,
            preco,
            qtn,
            codigo
        };
        res.send(produto)
    
        
        

        
        
        
    });
 


app.get('/serie/:id',(req,res) =>{
    let {id} = req.params;
    var a = series.filter(function(series)
    {
         if( series.id == id){
             return series.name
         }
    });
    res.send(a)
    console.log(a);
});

// Essa o parquinho aceitar 

//app.get('/serie/:id',(req,res) =>{
//    let {id} = req.params;
//    res.send(series[id - 1])
//});
