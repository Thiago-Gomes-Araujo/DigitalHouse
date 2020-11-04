var express = require('express');
var router = express.Router();
const UserController = require("../controllers/UserController");

router.get('/registrar', UserController.create);

router.post('/autenticar', UserController.save);
router.get('/autenticar', UserController.login);

module.exports = router;
