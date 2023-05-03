const express = require('express');
const router = express.Router();

router.route('/:id')
    .delete(function(req, res) {
        res.send('Delete Meme');
    });

module.exports = router;