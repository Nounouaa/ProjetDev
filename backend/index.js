const express = require('express');
const cors = require('cors');
const app = require('./app');
const db = require('./models');



db.sequelize.sync().then(() => {
    console.log('Connexion reussi');
    app.listen(port, () => {
        console.log(`Serveur backend démarré sur http://localhost:${port}`);
    });
})



// Middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;




// Lancer le serveur