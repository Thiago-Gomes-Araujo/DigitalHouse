const produtoContrller = {
    viewForm: (req, res) =>{
        res.render('produto')
    },

    saveForm: (req, res) =>{
        console.log(req.body);
        const {nomeproduto, precoproduto} = req.body;
        res.send(nomeproduto)
    }


}
module.exports = produtoContrller;