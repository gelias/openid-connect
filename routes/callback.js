var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var code = req.query.code
  var state = req.query.state
  res.render('callback', { title: 'Successfully callbacked', code: code, state: state });
  
});

module.exports = router;
