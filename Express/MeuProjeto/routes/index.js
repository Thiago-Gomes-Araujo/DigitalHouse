var express = require('express');
const ContatoController = require('../controller/ContatoCrontroller');
const EstudanteController = require('../controller/EstudanteController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/contato", ContatoController.index);
router.get("/estudante",EstudanteController.index)

module.exports = router;
