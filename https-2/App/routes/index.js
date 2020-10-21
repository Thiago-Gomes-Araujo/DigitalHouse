var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const celularController = require('../controllers/celularController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contato',indexController.viewContato);
router.get('/celular/',celularController.viewCelular);

module.exports = router;
