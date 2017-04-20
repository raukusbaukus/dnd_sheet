var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = process.env.PORT || '3030';

var sheetCtrl = require('./controllers/sheetCtrl');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.listen(port, function() {
  console.log('listening on:', port);
});

app.get('/all/:id', sheetCtrl.getAll);
app.get('/core/:id', sheetCtrl.getCore);
app.get('/abils/:id', sheetCtrl.getAbils);
app.get('/skills/:id', sheetCtrl.getCore);
app.get('/features/:id', sheetCtrl.getCore);
app.get('/spells/:id', sheetCtrl.getCore);
app.get('/inventory/:id', sheetCtrl.getCore);
