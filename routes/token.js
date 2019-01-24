var express = require('express');
var router = express.Router();
var requestify = require('requestify');

router.get('/', function(req, res, next) {
  var code = req.query.code

  requestify.request('https://www.googleapis.com/oauth2/v4/token', {
    method: 'POST',
    dataType: 'form-url-encoded',
    body: {
      client_id: '907113127809-0pmnffpdsuf6epqbs7g41215pke1eum7.apps.googleusercontent.com'
      ,client_secret: 'S2zu9HwDrdw4jKZZR65kcs8a'
      ,code: code
      ,redirect_uri: 'https://eliasopenidconnect.herokuapp.com/callback'
      ,grant_type: 'authorization_code' 
    }
  }).then((response) => {
    console.log('OK')
    var res_json = JSON.parse(response.body)
    var access_token = res_json.access_token
    var id_token = res_json.id_token
    res.render('token', { title: 'Token callbacked', access_token: access_token, id_token: id_token});
  }).fail(function(response) {
    console.log('NOK')
    res.render('token', { title: 'ERROR callbacked'});
  });
});

module.exports = router;

