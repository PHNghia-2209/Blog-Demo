const express = require('express');
const router = express.Router();

const coursesController = require('../app/controller/courses.controller');

// coursesController.show
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.delete('/:id', coursesController.remove);
router.put('/:id', coursesController.update);
router.get('/:slug', coursesController.show);

module.exports = router;
