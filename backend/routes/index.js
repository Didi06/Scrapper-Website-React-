const express = require('express');
const router = express.Router();

const articles = require('./../controllers/articles-controller');

router.get('/', articles.index);
router.get('/scrape', articles.scrape);
// router.get('/tvs', articles.index);

module.exports = router;