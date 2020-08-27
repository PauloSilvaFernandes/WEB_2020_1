var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var DisciplinaRoute = require('./routes/DisciplinaRoute')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/users', users);
app.use('/Disciplina',DisciplinaRoute)

module.exports = app;
