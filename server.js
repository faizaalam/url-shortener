// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var result_json = {
  'original_url': null,
  'short_url': null
};
var error = {
'error': 'Not a valid url'
};

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/new/:url', function(request,response){
  var passed_url = request.params.url;
  if((passed_url.split("://")[0] === "http") || (passed_url.split("//")[0] === "https" )){
    response.send("valid");
  }
  else{
    response.send(error);
  }
  result_json.original_url = passed_url;
  
  
  
    
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
