var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/teste', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/registrar',UserController)

module.exports = router;
