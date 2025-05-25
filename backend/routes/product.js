const express = require('express')
const router = express.Router()
const { Product } = require('../models')

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Récupère la liste des produits
 *     responses:
 *       200:
 *         description: Liste des produits
 */
router.get('/products', async(req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

module.exports = router