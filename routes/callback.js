var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var code = req.query.code
  res.render('callback', { title: 'Successfully callbacked', code: code });
  
});

module.exports = router;
