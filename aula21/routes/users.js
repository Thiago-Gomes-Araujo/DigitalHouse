var express = require('express');
var router = express.Router();
const UserController = require("../controllers/UserController");

router.get('/registrar', UserController.create);
router.post('/registra', UserController.save);

router.get('/autenticar', UserController.login);
router.post('/autenticar',UserController.autheticate)

module.exports = router;
