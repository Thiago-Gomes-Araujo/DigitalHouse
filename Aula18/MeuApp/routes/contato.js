var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/contato', function(req, res) {
  res.send('Seu Contato animal');
});

module.exports = router;
