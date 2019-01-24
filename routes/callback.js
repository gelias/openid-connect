var express = require('express');
var router = express.Router();
var requestify = require('requestify');

router.get('/', function(req, res, next) {
  var code = req.query.code
  var state = req.query.state

  res.render('callbackmobile', { title: 'Successfully callbacked', schema_url: 'http://google.com'});
  /** 
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
      console.log(response)
      var res_json = JSON.parse(response.body)
      var access_token = res_json.access_token
      var id_token = res_json.id_token
      var schema_url = 'umov://openid?access_token='+access_token+'&id_token='+id_token
      console.log(schema_url)
      res.render('callback', { title: 'Successfully callbacked', schema_url: 'http://google.com'});
    }).fail(function(response) {
      console.log(response)
      res.render('callback', { title: 'ERROR callbacked', schema_url: 'http://pudim.com.br' });
    });

  //res.render('callback', { title: 'empty callbacked', schema_url: 'http://google.com' });
*/
  
});

module.exports = router;


