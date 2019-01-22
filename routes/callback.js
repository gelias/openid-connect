var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var code = req.query.code
  var state = req.query.state
  res.render('callback', { title: 'Successfully callbacked', code: code, state: state });
  
});

router.get('/authorized', function(req, res, next) {
  var access_token = req.query.access_token
  var token_type = req.query.token_type
  res.render('authorized', { title: 'Successfully Authorized', access_token: access_token, token_type: token_type });
  
});

module.exports = router;
