var mongoose = require('mongoose');
var db = require('../config');

var taskSchema = mongoose.Schema({
	name: String,
	description: String,
	due: Date,
	person: String,
	status: String
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;