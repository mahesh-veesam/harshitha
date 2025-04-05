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

    const introAudio1 = new Audio('../assets/song1.mp3'); // First audio file
    const introAudio2 = new Audio('../assets/song.mp3'); // Second audio file
    const introImage = document.querySelector('#intro-tab'); // Select the image in h2

    // Play the first audio when the site loads
    // introAudio1.play().catch((error) => {
    //     console.log('Autoplay blocked. Audio will play after user interaction.');
    // });

    setTimeout(() => {
        loadingScreen.style.opacity = 0; // Start fade-out
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Hide after fade-out
            introTab.style.display = 'flex'; // Show intro tab

            // Start typing effect after intro tab is displayed
            const introMessage = document.querySelector('#intro-tab h2');
            const messageText = 'Wish you a very veryy<br>Happy Birthdayyyy <br> <img src="../assets/heart2.jpg" alt="">';
            typeText(introMessage, messageText, 100); // Adjust delay as needed

        }, 1000); // Match the CSS transition duration
    }, 1800); // Set loading screen time to 5 seconds

    introImage.addEventListener('click', function() {
        
        introAudio1.play();

        // introAudio2.currentTime = 0; // Reset the second audio to the beginning
        // introAudio2.play().catch((error) => {
        //     console.log('Audio playback failed:', error);
        // }); // Play the second audio when the image is clicked

        // Add the heartbeat animation class to the image
        introImage.classList.add('heartbeat');

        // Make the "Start" button visible and fade it in
        startButton.style.visibility = 'visible';
        startButton.style.opacity = '1';
        startButton.style.transition = 'opacity 0.5s ease-in-out'; // Smooth fade-in effect
    });

    startButton.addEventListener('click', function() {
        introAudio1.pause(); // Stop the first audio when the user clicks the "Start" button
        introAudio1.muted = true;
        introAudio2.play();
        introTab.style.opacity = 0; // Fade out intro tab
        introTab.style.transition = 'opacity 0.3s ease-in-out';

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