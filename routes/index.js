var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var articleAuth = require('../methods/author.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/* GET home page. */

app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


app.get('/api/articles/', articleAuth.getAllFields);

app.post('/api/articles/:title/:author/:description/:url',articleAuth.addAuthor);


app.get('/api/articles/:author', articleAuth.getAuthorByName);


app.delete('/api/articles/:author', articleAuth.deleteByAuthor);

module.exports = app;
