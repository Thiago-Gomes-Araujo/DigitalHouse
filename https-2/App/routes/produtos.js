var express = require('express');
var router = express.Router();
const produtoController = require('../controllers/protudoController')


router.get('/criar',produtoController.viewForm);
router.post('/criar',produtoController.saveForm)
router.get('/:id/editar',produtoController.viewAttForm)
router.put('/editar', produtoController.editar);
router.get('/',produtoController.listarProduto);
router.delete('/deletar/:id',produtoController.deletarProduto);

module.exports = router;
