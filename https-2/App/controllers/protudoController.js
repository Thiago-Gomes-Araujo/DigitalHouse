let produto = {
    nome: null,
    preco: null,
}

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


        /* console.log(req.body);*/
        const {nomeproduto, precoproduto} = req.body; 
        let produto = {
            nome: nomeproduto,
            preco: precoproduto,
        }
        res.send(produto)
    }


}
module.exports = produtoContrller;