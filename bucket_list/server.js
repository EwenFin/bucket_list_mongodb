var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.use(express.static('public'));

var server = app.listen(3000, function () {

  console.log('App running on port '+this.address().port);
});