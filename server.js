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
  let newUrl = { url: passed_url, short: shortCode }; 
  if(valid_url.isUri(passed_url)){
    console.log('Looks like an URI');
    } else {
        console.log('Not a URI');
    }
  
  var shortcode = shortid.generate();
  shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
  
  
  collection.insert(newURL);
  result_json.original_url = passed_url;
  
  response.send("Hello");
  
    
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
