const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.route('/')
    .post(bodyParser.json(), function(req, res) {
        console.log(req.body)
        if(req.body.pseudo === process.env.PSEUDO && req.body.password === process.env.PASSWORD) {
            console.log('Bienvenu '+ req.body.pseudo)
            return res.send('Bienvenu '+req.body.pseudo);
        } else if(req.body.pseudo === process.env.PSEUDO || req.body.password === process.env.PASSWORD) {
            return res.status(400)
        } else {
            console.log(req.body)
            return res.status(500)
        }
    });
module.exports = router;