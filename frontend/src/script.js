document.addEventListener("DOMContentLoaded", function() {
    const quantityInput = document.getElementById("quantity");
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const nextProductBtn = document.getElementById("nextProduct");
    const carouselElement = document.getElementById("productCarousel");
    const productCarousel = carouselElement ? new bootstrap.Carousel(carouselElement) : null;

    const rowWrapper = document.querySelector('.image-row-wrapper');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    // Scroll buttons
    if (leftBtn && rightBtn && rowWrapper) {
        leftBtn.addEventListener('click', () => {
            rowWrapper.scrollBy({ left: -200, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            rowWrapper.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }

    // Quantity buttons
    if (decreaseBtn && quantityInput) {
        decreaseBtn.addEventListener("click", function() {
            let currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }

    if (increaseBtn && quantityInput) {
        increaseBtn.addEventListener("click", function() {
            let currentValue = parseInt(quantityInput.value) || 1;
            quantityInput.value = currentValue + 1;
        });
    }

    // Next carousel item
    if (nextProductBtn && productCarousel) {
        nextProductBtn.addEventListener("click", function() {
            productCarousel.next();
        });
    }
});