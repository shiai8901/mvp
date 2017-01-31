var request = require('request');
var db = require('../db/config');
var User = require('../db/db_settings/user');
var Task = require('../db/db_settings/task');

exports.fetchTask = function(condition, cb) {
	Task.find(condition, function(err, tasks) {
		if (!err) {
			console.log('fetchTask: ', tasks);
			cb(tasks);
		} else {
			console.log('ERROR in fetchTask, ', error);
		}
	});
};

exports.removeTask = function(condition, cb) {
	exports.fetchTask(condition, 
		Task.remove(task, function(err) {
			console.error('ERROR in removeTask');
		})
	);
};

exports.saveTask = function(data) {
	console.log('data', data);
	// Task.create(data);
	Task.findOne({name: data.name})
		.then(function(task) {
			// if find a task with same name
			if (task) {
			// delete it
				console.log('find task in saveTask', task);
				Task.remove({name: data.name}, function(err) {
					if (err) {
						console.error('ERROR in update task');
					}
				});
			}
			// and save the updated task in table	
			Task.create(data);
		});
};
