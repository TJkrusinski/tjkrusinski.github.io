'use strict';

var express = require('express'),
	jade = require('jade'),
	app = express();

app.use(express.static(__dirname+'/public'));
app.engine('jade', jade.__express);
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

app.get('/?', function(req, res){
	res.render('index');
});

app.listen(3000);
