const express = require('express');
const router = express.Router();

const coursesController = require('../app/controller/courses.controller');

// coursesController.show
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.delete('/:id', coursesController.remove);
router.delete('/:id/force', coursesController.forceRemove);
router.put('/:id', coursesController.update);
router.patch('/:id/restore', coursesController.restore);
router.get('/:slug', coursesController.show);

module.exports = router;
