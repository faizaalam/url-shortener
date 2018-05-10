// server.js
// where your node app starts

// init project
var express = require('express');
var mongo = require("mongodb").MongoClient;
var valid_url = require("valid-url");
var shortid = require("shortid");
var db_url = process.env.MONGO_URL;

var app = express();

var result_json = {
  'original_url': null,
  'short_url': null
};
var error = {
'error': 'Not a valid url'
};

app.get('/:url(*)', function(request,response){
  var passed_url = request.params.url;
  
  if(valid_url.isUri(passed_url)){
  
  
    mongo.connct(db_url, function(err, db){
      if(err) {
      response.end("error !!!!!");
      console.log(error);
      }
      var url_list=db.collection('links');
           var shortcode = shortid.generate();
          shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
      let newUrl = { url: passed_url, short: shortcode }; 
      url_list.insert([newUrl], function(){
    result_json.original_url = passed_url;
        result_json.short_url = 'http://'+request.headers['host'] + "/" + shortcode;
        db.close();
        response.send(result_json);
      });
      
      
      
    });
    } else {
      response.send(error);
    }
    
    
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
