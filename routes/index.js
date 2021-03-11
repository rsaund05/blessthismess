const express = require('express');
const router = express.Router();

//Render dashboard 
router.get('/', (req, res) => {
	res.render('dashboard');
});

module.exports = router;