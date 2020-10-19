var express = require('express');
const ContatoController = require('../controller/ContatoCrontroller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/contato", ContatoController.index);

module.exports = router;
