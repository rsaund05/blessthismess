const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.registerPage = (req, res, next) => {
	res.render('register', { title: 'Blessthismess - Register' });
};

exports.loginPage = (req, res, next) => {
	res.render('loginPage', { title: 'Blessthismess - Login' });
};
