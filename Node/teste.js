const express = require('express');
const app = express();
app.listen(8000,() => console.log("Levantando um servidor com Express"));

const series = [ 
    { "id": 1, "name": "Friends" }, 
    { "id": 2, "name": "Breaking Bad" }, 
    { "id": 3, "name": "Dexter" }, 
    { "id": 4, "name": "Six Feet Under" } ]
 
//    app.get('/serie/:id',(req,res) =>{
//        let {id} = req.params;
//        series.filter(function(series)
//        {
//             if( series.id == id){
//                res.send (series.name)
//                //return console.log (series.name)
//             }
//        });
//    });

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


//app.get('/serie/:id',(req,res) =>{
//    let {id} = req.params;
//    res.send(series[id - 1])
//});
