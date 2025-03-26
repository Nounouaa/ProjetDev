const express = require('express');
const app = express();
const routerApi = require('./routes/teste')




// Routes de test
app.get('/', routerApi);


module.exports = app;