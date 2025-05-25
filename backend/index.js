const db = require('./models');

const app = require('./app');
const port = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
    console.log('Connexion réussie à la base de données');
    app.listen(port, () => {
        console.log(`Serveur backend démarré sur http://localhost:${port}`);
    });
}).catch((err) => {
    console.error('Erreur de connexion à la base de données :', err);
});