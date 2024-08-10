const express = require('express');
const router = express.Router();

const SiteController = require('../app/controller/site.controller');

// newsController.index
router.get('/search', SiteController.search);

router.get('/', SiteController.index);

module.exports = router;
