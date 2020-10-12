var express = require('express');
var router = express.Router();
var notesCtrl = require('../../controllers/api/notes');


/* GET /api/notes */
router.get('/', notesCtrl.index);

module.exports = router;