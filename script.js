// This file contains the JavaScript code for the birthday wishes website.

document.addEventListener('DOMContentLoaded', function() {
    const wishForm = document.getElementById('wishForm');
    const wishInput = document.getElementById('wishInput');
    const wishesList = document.getElementById('wishesList');

    wishForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const wishText = wishInput.value.trim();
        if (wishText) {
            const wishItem = document.createElement('li');
            wishItem.textContent = wishText;
            wishItem.style.opacity = 0; // Start with opacity 0 for fade-in effect
            wishesList.appendChild(wishItem);

            // Fade-in effect
            setTimeout(() => {
                wishItem.style.transition = 'opacity 0.5s';
                wishItem.style.opacity = 1;
            }, 10);

            // Smoothly clear the input field
            wishInput.style.transition = 'background-color 0.3s';
            wishInput.style.backgroundColor = '#d4edda'; // Light green for feedback
            setTimeout(() => {
                wishInput.value = '';
                wishInput.style.backgroundColor = '';
            }, 500);
        }
    });
});