var express = require('express');
var router = express.Router();
const ContatoController = require("../controller/ContatoController");
const TesteController = require('../controller/TesteController');
const ContatoController = require("../controller/TesteController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/contato", ContatoController.index)
router.get("/teste", TesteController.index)

module.exports = router;
