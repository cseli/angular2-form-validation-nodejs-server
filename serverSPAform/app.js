'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const routes = require('./routes/base');
const spaform = require('./routes/spaform');
const config = require('./config/config');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/v1', routes);
app.use('/v1/spaform', spaform);

app.listen(config.port, function () {
    console.log('Server listening on port ' + config.port);
})