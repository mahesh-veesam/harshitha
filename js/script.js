// This file contains the JavaScript code for the birthday wishes website.

function typeText(element, text, delay = 100) {
    let index = 0;
    element.innerHTML = ''; // Clear the element's content
    const interval = setInterval(() => {
        if (index < text.length) {
            // Check if the current character is part of an HTML tag
            if (text[index] === '<') {
                const closingIndex = text.indexOf('>', index);
                if (closingIndex !== -1) {
                    element.innerHTML += text.slice(index, closingIndex + 1); // Append the full tag
                    index = closingIndex + 1;
                    return;
                }
            }
            element.innerHTML += text[index]; // Append regular characters
            index++;
        } else {
            clearInterval(interval); // Stop the interval when done
        }
    }, delay);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded'); // Debugging log
    const loadingScreen = document.getElementById('loading-screen');
    const introTab = document.getElementById('intro-tab');
    const mainContent = document.querySelector('main');
    const startButton = document.getElementById('start-button');

    // Typing effect for the loading screen message
    const loadingMessage = document.querySelector('#loading-screen h1');
    const loadingText = 'Chinniiii.... ';
    typeText(loadingMessage, loadingText, 150); // Adjust delay as needed

    setTimeout(() => {
        loadingScreen.style.opacity = 0; // Start fade-out
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Hide after fade-out
            introTab.style.display = 'flex'; // Show intro tab

            // Start typing effect after intro tab is displayed
            const introMessage = document.querySelector('#intro-tab h2');
            const messageText = 'Wish you a very veryy<br>Happy Birthdayyyy <br> <img src="data:image/jpeg;base64,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" alt="">';
            typeText(introMessage, messageText, 100); // Adjust delay as needed

        }, 1000); // Match the CSS transition duration
    }, 1800); // Set loading screen time to 5 seconds

    startButton.addEventListener('click', function() {
        introTab.style.opacity = 0; // Fade out intro tab
        introTab.style.transition = 'opacity 0.5s ease-in-out';

        const introMsg = document.querySelector('.container .msg');
        const msgText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ipsum odit eaque officiis rem dolore vel incidunt facilis et ut corporis qui, unde dolores omnis beatae sed assumenda quo nemo";
        typeText(introMsg, msgText, 100); 

        setTimeout(() => {
            mainContent.style.background = "white"
            mainContent.style.transition = 'opacity 0.5s ease-in-ouut'
        },12000)

        setTimeout(() => {
            introTab.style.display = 'none'; // Hide intro tab
            mainContent.style.display = 'block'; // Show main content
            setTimeout(() => {
                mainContent.style.opacity = 1; // Fade in main content
            }, 10); // Delay to ensure display change is applied
        }, 2000); // Match the CSS transition duration
    });

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