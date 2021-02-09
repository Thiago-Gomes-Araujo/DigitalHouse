const express = require('express');
const PhotoController = require('../controllers/PhotoController');
const router = express.Router();

router.get('/', PhotoController.index)
/* router.get('/', function(req, res, next){
    return res.status(200).json({message: "Sua Api esta ok"})
});
 */
module.exports = router;