const express = require('express');
const routes = require('./routes');

const app = express();

// API
app.use('/', routes);

module.exports = app;
