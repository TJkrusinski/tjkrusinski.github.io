'use strict';

var express = require('express');
var jade = require('jade');
var app = express();

app.use(express.static(__dirname+'/'));
app.engine('jade', jade.__express);
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

app.get('/foo', function(req, res){
	res.render('index');
});

app.listen(3000);
