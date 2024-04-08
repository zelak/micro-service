const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

// API
app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
