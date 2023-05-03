const express = require('express');
const fs = require('fs');
const router = express.Router();

	router.route('/')
	.get(function(req, res) {
            fs.readdir('./memes', (err, files) => {
                if (err) throw err;
                res.json(files);
            } 
        )
	})
	.post(function(req, res) {
		res.send('Create memes');
        console.log('Create meme')
	})
	.delete(function(req, res) {
        fs.unlink((err) => {
            if (err) throw err;
		    res.send('Le meme a été supprimé.');

          });
	});

module.exports = router;