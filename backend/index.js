require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Router
const authenticateRouter = require('./routes/authenticate.js');
const memesRouter = require('./routes/memes.js');

app.use(cors())
app.use('/authenticate', authenticateRouter);
app.use('/memes', memesRouter);


// Listen
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serveur demarré sur http://localhost:${port}`);
});