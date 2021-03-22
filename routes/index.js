const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Render dashboard 
router.get('/', (req, res) => {
	res.render('index', {title: 'Blessthismess - Home'});
});

router.get('/login', userController.loginPage);

module.exports = router;