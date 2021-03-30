const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Render dashboard
router.get('/', (req, res) => {
	res.render('index', { title: 'Blessthismess - Home' });
});

router.get('/about', (req, res) => {
	res.render('about', { title: 'Blessthismess - About' });
});

module.exports = router;
