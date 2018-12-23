require('./config');
var express = require('express');

var mongodb = require('mongodb');
var db = require('./db');
var model = require('./model');

var app = express();
var PORT = process.env.PORT;
app.get('/test', function(request, response){
  model.users.find({id: 3}).then(function(res){
    var userInstance = new model.users({
      name: 'Dhilip'
    });
    userInstance.save().then(function(doc){
      response.send(doc);
    }, function(err){
      response.send(err);
    });
  }, function(err){
    response.send(err);
  });
});

app.get('/', function(request, response){
  response.send(html);
});
app.use(express.static(__dirname ));
app.listen(PORT, function(){
  console.log('Server Started');
});

var html =  '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><div id="root">Hi</div><script src="https://code.jquery.com/jquery-3.3.1.min.js"></script><script src="/client.js"></script></body></html>';