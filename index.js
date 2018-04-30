const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./config/router');

const { dbURI, port } = require('./config/environment');

const app = express();

app.use('/api', router);
app.use('/*', (req, res) => res.sendFile(`${__dirname}/public`));

mongoose.connect(dbURI);
app.use(bodyParser.json());

app.listen(port, () => console.log(`Running on port${port}`));
