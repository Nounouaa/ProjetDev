const express = require('express');
const router = express.Router(); // Utilisation correcte de Router()

// Définition de la route GET "/"
router.get('/', (req, res) => {
    res.json({ message: 'API fonctionne !' });
});




// Exportation du routeur
module.exports = router;