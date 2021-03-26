const express = require('express');
const userController = require('../controllers/userController');
const passport = require('passport');
const router = express.Router();

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});



router.post('/register', (req, res) => {

});

router.post('/login', (req, res) => {
	//Confirmed, this route works!
	const email = req.body.emailField;
	const pass = req.body.passField;
});
module.exports = router;