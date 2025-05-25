const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /teste :
 *    get : 
 *      summary : teste de l\'api
 *      responses : 
 *          200 : 
 *              description : api fonctionne
 * 
 * 
 */

router.get('/teste', (req, res) => {
    res.json({ message: 'API fonctionne !' });
});

module.exports = router;