const express = require('express');
const cors = require('cors');
const { swaggerUi, swaggerSpec } = require('./swagger');
const routerApi = require('./routes/teste');
const routerProduct = require('./routes/product');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', routerApi);
app.get('/products', routerProduct);

module.exports = app;