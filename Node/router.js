const express = require('express');
const produto = require('./rotas/produto');
const ProdutoController = require('./controller/ProdutoController')
const CarrinhoController = require('./controller/CarrinhoController')
const app = express();
app.use('/criar',ProdutoController.CriarProduto);
app.use('/deletar',ProdutoController.DeletarProduto);
app.use('/:item',ProdutoController.CriarProduto)
app.listen(80,() => console.log("Levantando um servidor com Express"));

//Exportando Rotas
//app.use('/produtos',produto)
