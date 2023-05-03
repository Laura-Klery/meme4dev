const express = require('express');
const router = express.Router();

	router.route('/')
	.get(function(req, res) {
		res.send('All Memes');
        console.log('All memes')
	})
	.post(function(req, res) {
		res.send('Create memes');
        console.log('Create meme')
	})
	.delete(function(req, res) {
		res.send('Delete memes');
        console.log('delete memes')
	});

module.exports = router;