var express = require('express');
var router = express.Router();
const ContatoController = require("../controller/ContatoController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/contato", ContatoController.index)

module.exports = router;
