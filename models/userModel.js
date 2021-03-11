const mongoose = require('mongoose');
const User = require('../models/userModel');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	password: String
});

User
	.virtual('getName')
	.get(() => {
		return this.username;
	})
//load mongoose plugin(s)
userDetail.plugin(passportLocalMongoose);

module.exports = mongoose.model('btm', userSchema, 'users');