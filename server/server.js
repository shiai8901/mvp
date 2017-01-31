var express = require('express');
var http = require('http');
var app = express();
var helper = require('./database_helper');
// use middleware to grab all files in client folder
// and set the route as '/static'
app.use('/node_modules', express.static('../node_modules'));
app.use('/static', express.static('../client'));

// redirect user to '/static'
app.get('/', function(req, res) {
	res.redirect('/static');
});

// fetch data from Tasks table in database
app.get('/updatedNewTask', function(req, res) {
	console.log('*************************');
	var tasks = helper.fetchTask({'status': 'NeedAssign'}, function(tasks) {
		res.writeHead(200);
		res.end(JSON.stringify(tasks));
	});
});

// post data to Tasks in database
app.post('/allTask', function(req, res) {
	var body = '';
	req.on('error', function(error) {
		console.log('ERROR in post /assignedNewTask in server', error);
	});
	req.on('data', function(data) {
		body += data;
	});
	req.on('end', function() {
		body = JSON.parse(body);
		helper.saveTask(body);
	});
	res.writeHead(201);
	console.log('POST: ', body);
	res.end();
});

// fetch data from Tasks in database
app.get('/updatedAllTask', function(req, res) {
	console.log('*****************');
	var tasks = helper.fetchTask({}, function(tasks) {
		res.writeHead(200);
		res.end(JSON.stringify(tasks));
	});
});

app.listen(3000, function() {
	console.log('Server now listen on port 3000');
})