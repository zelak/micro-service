const express = require('express');
const prometheus = require('express-prom-bundle');
const routes = require('./routes');

const app = express();

// API
app.use('/', routes);

app.use(prometheus());

module.exports = app;
