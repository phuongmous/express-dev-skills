var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

// GET /skills
router.get('/', skillsController.index);
// GET /skills/new
router.get('/new', skillsController.new);
// GET /skills/:id
router.get('/:id', skillsController.show);
// GET /skills/:id/edit
router.get('/:id/edit', skillsController.edit);
// POST /skills <- Controller action: create
router.post('/', skillsController.create);
// DELETE /skills/:id
router.delete('/:id', skillsController.delete);
// PUT /skills/:id <- Controller action: update
router.put('/:id', skillsController.update);
module.exports = router;
