const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.route('/')
  .post(bodyParser.json(), function(req, res) {
    if(req.body.pseudo === process.env.PSEUDO && req.body.password === process.env.PASSWORD) {
      return res.status(200).send('Bienvenue '+req.body.pseudo);
    } else if(req.body.pseudo === process.env.PSEUDO || req.body.password === process.env.PASSWORD) {
      return res.status(401).send('Identifiant ou mot de passe incorrect')
    } else {
      return res.status(500).send('Erreur serveur')
    }
  });
module.exports = router;