document.addEventListener("DOMContentLoaded", function() {
    // Sélection des éléments
    const quantityInput = document.getElementById("quantity");
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const nextProductBtn = document.getElementById("nextProduct");
    const productCarousel = new bootstrap.Carousel(document.getElementById("productCarousel"));

    // Gestion des boutons + et -
    decreaseBtn.addEventListener("click", function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener("click", function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    // Bouton "Next Product" pour défiler les images
    nextProductBtn.addEventListener("click", function() {
        productCarousel.next();
    });
});