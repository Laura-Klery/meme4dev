const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Router
const authenticateRouter = require('./routes/authenticate.js');
const memesRouter = require('./routes/memes.js');
const createMemeRouter = require('./routes/create.js');
const deleteMemeRouter = require('./routes/delete.js');

app.use(cors())
app.use('/authenticate', authenticateRouter);
app.use('/memes', memesRouter);
app.use('/memes/create', createMemeRouter);
app.use('/memes/delete', deleteMemeRouter);

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur demarré sur http://localhost:${port}`);
});