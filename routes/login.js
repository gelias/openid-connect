var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('barra')
  res.render('login', { title: 'OpenId Connect Sample' });
});

router.get('/mobile', function(req, res, next) {
  console.log('mobile')
  res.render('loginmobile', { title: 'OpenId Connect Sample' });
});

module.exports = router;