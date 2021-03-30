const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
	username: { type: String, required: true, maxlength: 20 },
	email: { type: String, required: true, maxlength: 30 },
	password: { type: String, required: true },
	dateAded: { type: Date, default: Date.now },
});

//load mongoose plugin(s)
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
