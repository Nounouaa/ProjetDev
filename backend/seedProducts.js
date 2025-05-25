const db = require('./models');

const seedProducts = async() => {
    await db.Product.bulkCreate([{
            image: 'assets/img/product01.png',
            title: 'Off-White',
            comment: 'Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.',
            description: 'Out of Office "Ooo" sneakers',
            price: 775
        },
        {
            image: 'assets/img/product02.png',
            title: 'Nike',
            comment: 'Tsara be eeeee !!!',
            description: 'Nike Air Force Premium',
            price: 200
        },
        {
            image: 'assets/img/product03.png',
            title: 'Nike',
            comment: 'LOVAMAMY',
            description: 'Nike Air Force Premium',
            price: 98.23
        },
        {
            image: 'assets/img/product04.png',
            title: 'adidas',
            comment: 'Nounouaa',
            description: 'DAILY 3.0 SHOES',
            price: 98.99
        },
    ]);

    console.log('Produits insérés avec succès dans la base.');
    process.exit();
};

seedProducts();