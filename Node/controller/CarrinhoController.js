const CarrinhoController = {
    addItem: (req, res) =>{
        res.send("Item Adicionado");
    },
    DeletarProduto: (req, res) => {
        res.send("Item Removido");
    }
};

module.exports = CarrinhoController;