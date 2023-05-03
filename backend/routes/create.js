const express = require('express');
const router = express.Router();

router.route('/new')
    .post(function(req, res) {
        res.send('Create Meme');
    });

module.exports = router;