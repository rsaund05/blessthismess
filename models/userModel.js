const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
	username: {type: String, required: true, maxlength: 20},
	password: {type: String, required: true}
});

User
	.virtual('getUserName')
	.get(() => {
		return this.username;
	})

//load mongoose plugin(s)
User
	.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);