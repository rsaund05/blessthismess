const express = require('express');
const userController = require('../controllers/userController');
const passport = require('passport');
const router = express.Router();

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/login', userController.loginPage);

router.get('/register', userController.registerPage);

router.post('/register', (req, res) => {
	const email = req.body.emailField;
	const username = req.body.userField;
	const pass = req.body.passField;
	const confirmPass = req.body.passFieldConfirm;
});

router.post('/login', (req, res) => {
	//Confirmed, this route works!
	const email = req.body.emailField;
	const pass = req.body.passField;
	console.log('login: ' + email + '  pass: ' + pass);
});
module.exports = router;
