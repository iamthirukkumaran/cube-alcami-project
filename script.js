// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Carousel Functionality
    const carousel = document.querySelector('.reviews-content');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const dots = document.querySelectorAll('.pagination .dot');
    let currentIndex = 0;
    const totalCards = document.querySelectorAll('.review-card').length;
    const cardsPerView = 3; // Assuming 3 cards visible at a time

    function updateCarousel() {
        const cardWidth = document.querySelector('.review-card').offsetWidth + 20; // Including margin
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    rightArrow.addEventListener('click', () => {
        if (currentIndex < Math.ceil(totalCards / cardsPerView) - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const toggle = item.querySelector('.toggle');
        toggle.addEventListener('click', () => {
            const answer = item.nextElementSibling || document.createElement('div');
            if (!answer.classList.contains('faq-answer')) {
                answer.classList.add('faq-answer');
                answer.textContent = 'This is a placeholder answer. Replace with actual content.';
                item.insertAdjacentElement('afterend', answer);
            }
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            toggle.textContent = toggle.textContent === '+' ? '−' : '+';
        });
    });

    // Flavor Selection
    const flavorOptions = document.querySelectorAll('.flavor-options label');
    flavorOptions.forEach(option => {
        option.addEventListener('click', () => {
            flavorOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    // Price Option Selection
    const priceOptions = document.querySelectorAll('.price-option');
    priceOptions.forEach(option => {
        option.addEventListener('click', () => {
            priceOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            option.querySelector('input[type="radio"]').checked = true;
        });
    });

    // Add to Cart Button (Basic Alert for Demo)
    const addToCartBtn = document.querySelector('.btn-add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        const selectedFlavor = document.querySelector('.flavor-options input:checked').value;
        const selectedPrice = document.querySelector('.price-option.selected .option-title').textContent;
        alert(`Added to cart: ${selectedFlavor} - ${selectedPrice}`);
    });

    // Subscribe Button (Basic Alert for Demo)
    const subscribeBtns = document.querySelectorAll('.btn-subscribe');
    subscribeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const emailInput = btn.previousElementSibling;
            if (emailInput && emailInput.value) {
                alert(`Subscribed with email: ${emailInput.value}`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });

    // Play Button (Placeholder for Video/Modal)
    const playButtons = document.querySelectorAll('.play-button, .play-button-6');
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Video playback would start here. Implement video player or modal as needed.');
        });
    });

    // Search Button (Placeholder)
    const searchBtn = document.querySelector('#search-btn');
    searchBtn.addEventListener('click', () => {
        alert('Search functionality would be implemented here.');
    });
});

// Basic Form Validation for Newsletter
const newsletterForms = document.querySelectorAll('.newsletter-form, .subscribe-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        if (/^\S+@\S+\.\S+$/.test(email)) {
            alert(`Thank you for subscribing with ${email}!`);
            form.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
});