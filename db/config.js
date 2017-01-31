var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tasks');

var db = mongoose.connection;

db.on('error', function(err) {
	console.error('connection error:', err);
});
db.once('open', function() {
	console.log('database tasks is open');
});

exports.db = db;