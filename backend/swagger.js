const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Express avec Swagger',
            version: '1.0.0',
            description: 'Documentation de l’API avec Swagger UI',
        },
        servers: [{
            url: 'http://localhost:3001',
        }, ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec,
};