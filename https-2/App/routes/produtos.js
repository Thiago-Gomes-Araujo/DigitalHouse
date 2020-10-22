var express = require('express');
var router = express.Router();
const produtoController = require('../controllers/protudoController')


router.get('/criar',produtoController.viewForm);

module.exports = router;
