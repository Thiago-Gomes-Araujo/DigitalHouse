/* chamando o express */
const express = require("express");
/* variavel criada para Utilizar o express */
const app = express();

/* configuração do Servidor (informado que vai usar o engine e o ejs) */
app.set("view engine", "ejs");

/* criando servidor */
app.listen(3333,() =>{
    console.log("Servidor Rodando na porta 3333")
});