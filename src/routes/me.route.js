const express = require('express');
const router = express.Router();

const meController = require('../app/controller/me.controller');

// coursesController.show
router.get('/store/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);

module.exports = router;
