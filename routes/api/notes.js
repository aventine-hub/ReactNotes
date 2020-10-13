var express = require('express');
var router = express.Router();
var notesCtrl = require('../../controllers/api/notes');


/* GET /api/notes */
router.get('/', notesCtrl.index);
router.post('/', notesCtrl.create);


module.exports = router;