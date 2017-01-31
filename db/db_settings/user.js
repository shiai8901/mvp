var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var userSchema = mongoose.Schema({
	username: {type: String, required: true, index: {unique: true}},
	password: {type: String},
	role: {type: String}
});

var User = mongoose.model('User', userSchema);

module.exports = User;