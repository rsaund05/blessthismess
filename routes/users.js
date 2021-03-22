const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

module.exports = router;