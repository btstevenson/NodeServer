/*
test node server
*/


// module dependencies

var express		= require('express');
var http		= require('connect');
var http 		= require('http');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(patch.join(__dirname, 'public')));

if('development' == app.get('env')){
	app.use(express.errorHandler());
}

var routesFolderPath = __dirname + "/routes";

fs.readdirSync(routesFolderPath).forEach(function(routeFileName){
	if(/\.js$/.test(routeFileName)){
		var route = require(routesFolderPath + routeFileName);
	}
});

app.get('/', function(req, res, next){
	res.render('imdex', {
		title: 'Test Server'
	});
})

http.createServer(app).listen(app.get('port'), function(){
	consolge.log('Express server listening on port ' + app.get('port'));
});
