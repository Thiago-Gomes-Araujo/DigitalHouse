const express = require('express');
const router = express.Router();

// Criando Rotas
router.get('/:item',(req,res) =>
res.send()
);

router.get('/criar',(req, res) =>
    res.send("Criando Protudo")
);

router.get('/deletar', (req,res) => 
    res.send('Deletando Produto')
);





module.exports = router;
