var express = require('express');
var router = express.Router();
var notesCtrl = require('../../controllers/api/notes');

router.use(require('../../config/auth'));
/* GET /api/notes */
router.get('/', notesCtrl.index);
router.post('/', notesCtrl.create);
router.delete('/:id', notesCtrl.delete);


module.exports = router;