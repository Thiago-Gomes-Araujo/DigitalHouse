 const TesteController = {
    getTeste: (req,res) => {
        let {nome} = req.params;
        let {sobrenome} = req.query;
        let frase = "Ola" +" "+ nome + " "+ sobrenome
        res.send(frase);
        console.log(frase);
    }

}
module.exports = TesteController;