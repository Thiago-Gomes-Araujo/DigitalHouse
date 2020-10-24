
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
    },
    viewAttForm: (req, res) => {
        let {id} = req.params;
        let produtos =[
            {id: 1,nome:'produto x', preco:10},
            {id: 2,nome:'produto y', preco:20},
            {id: 3,nome:'produto z', preco:30}
        ]
        /* res.send('Eu quero editar o produto '+ id); */
        res.render('editarProduto',produtos[id]);
    }
}
module.exports = produtoContrller;