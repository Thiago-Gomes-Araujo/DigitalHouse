const ProdutoController = {
    CriarProduto: (req, res) =>{
        res.send("Criando um Produto");
    },
    DeletarProduto: (req, res) => {
        res.send("Deletando um Produto");
    }
};

module.exports = ProdutoController;