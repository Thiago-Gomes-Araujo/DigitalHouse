// Servidor utilizando express
const express = require("express")

// criando aplicacao express
const app = express()

// importando rotas da aplicacao
const route = require('./routes/route')
app.use(route)

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000')
})