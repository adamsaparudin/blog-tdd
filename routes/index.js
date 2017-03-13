var express = require('express');
var router = express.Router();

let auth = require('../helper/auth')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth', auth)

module.exports = router;
