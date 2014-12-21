var express = require('express')
var app = express()
var port = port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

var server = app.listen(port, function () {
	var host = server.address().address
 	var port = server.address().port
 	console.log('Listening at http://%s:%s', host, port)	
});

// var connect = require('connect'),
//   app = connect.createServer(),
  

// app.use(connect.static(__dirname + '/public'));
// app.use(connect.compress());

// app.listen(port, function(){
//   console.log('Hexo is running on port %d', port);
// });