const celulares = [
    {
        nome: 'Motorola Moto E6 Plus',
        preco: 14999
    },
    {
        nome: 'Motorola Moto G7',
        preco: 19999
    },
    {
        nome: 'Alcatel 5033A',
        preco: 6999
    },
    {
        nome: 'Samsung Galaxy A50',
        preco: 33499
    }
];

const celularContrller = {
    
    viewCelular: (req, res) =>{
       res.send(celulares);
        res.send(req.query);
        /* const {max} = req.query; */

        for (i = 0; i < celulares.length; i++){
            const a = celulares.filter((precos) =>{
                return precos.preco < max
            })
            res.send(a)
        }
            
    }

}
module.exports = celularContrller;