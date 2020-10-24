
const produtoContrller = {

    viewForm: (req, res) =>{
        res.render('produto')
    },

  /*   saveForm: (req, res) =>{
        console.log(req.body);
        const {nomeproduto, precoproduto} = req.body;
        res.send(nomeproduto)
    } */
    saveForm: (req, res) =>{
        let produto = {
            nome: null,
            preco: null,
        }
        produto.nome = req.body.nome
        produto.preco = req.body.preco
        res.send(produto)
    }
}
module.exports = produtoContrller;