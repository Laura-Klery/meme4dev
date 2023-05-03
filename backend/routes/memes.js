const express = require('express');
const fs = require('fs');
const router = express.Router();
fs.readdir('./memes', (err, files) => {
    if (err) throw err;
    console.log(files);
})
	router.route('/')
	.get(function(req, res) {
		res.send(
            
        )
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