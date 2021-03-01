const express = require('express');
const router = express.Router();

//route to homepage
router.get('/', (req, res) => {
	res.render('index');
});

module.exports = router;