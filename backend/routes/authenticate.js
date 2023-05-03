const express = require('express');
const router = express.Router();

router.route('/')
    .post(function(req, res) {
        res.send('Authenticate');
        console.log('Authenticate')
    });

module.exports = router;