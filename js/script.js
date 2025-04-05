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
    let x = 0;
    console.log('DOM fully loaded'); // Debugging log
    const loadingScreen = document.getElementById('loading-screen');
    const introTab = document.getElementById('intro-tab');
    const mainContent = document.querySelector('main');
    const startButton = document.getElementById('start-button');
    const introContainer = document.querySelector('.intro-container');
    const ccHeading = document.querySelector('#intro-container h1');
    const introMessage = document.querySelector('#intro-container h2');
    const messageText = 'Wish you a very veryy<br>Happy Birthdayyyy Babyy <br> <img src="../assets/heart2.jpg" alt="">';
    const container = document.querySelector('.container');


    // Typing effect for the loading screen message
    const loadingMessage = document.querySelector('#loading-screen h1');
    const loadingText = 'Chinniiii.... ';
    typeText(loadingMessage, loadingText, 150); // Adjust delay as needed

    const introAudio1 = new Audio('../assets/song1.mp3'); // First audio file
    const introAudio2 = new Audio('../assets/song2.mp3'); // Second audio file
    introAudio1.volume = 0.3;
    introAudio2.volume = 0.3;
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

        }, 1000); // Match the CSS transition duration
    }, 1800); // Set loading screen time to 5 seconds

    introImage.addEventListener('click', function() {
        
        introAudio1.play();
        introImage.classList.add('heartbeat');

        ccHeading.textContent= ''; // Hide the .cc container
        introMessage.style.display = 'block'; // Make the intro-container h2 visible
        introMessage.style.opacity = 1; // Ensure it is fully visible
        introMessage.style.transition = 'opacity 0.5s ease-in-out'; // Smooth fade-in effect

        if(x == 0){
            typeText(introMessage, messageText, 100);
            x = 1;
        } 

        setTimeout(() => {
            displayAge();
            startButton.style.visibility = 'visible';
            startButton.style.opacity = '1';
            startButton.style.transition = 'opacity 0.5s ease-in-out';
        }, 8000);
         // Smooth fade-in effect
    });

    startButton.addEventListener('click', function() {
        introAudio1.pause(); // Stop the first audio when the user clicks the "Start" button
        introAudio1.muted = true;
        introAudio2.play();

         // Call the function to display the age before fading out the intro tab

        introTab.style.opacity = 0; // Fade out intro tab
        introTab.style.transition = 'opacity 0.3s ease-in-out';

        const introMsg = document.querySelector('.container .msg');
        const msgText = "Happyyy Birthdayy to my dearest person Ever in my life 🎂 🍾🎉🥳💗💖 Nuvvu matladina matladakapoina naaku nee meedha vunna everything eppudu alaane vuntadhi, idhavaruku la continue avvakapoina, u r my best friend eppatikaina, whatever happens between us I will always be there for u ❤ becoz u r my 🫶 😅";
        typeText(introMsg, msgText, 100);

        setTimeout(() => {
            mainContent.style.backgroundSize = "auto";
            mainContent.style.transition = 'opacity 1s ease-in-out';
        }, 5000);

        setTimeout(() => {
            mainContent.style.background = "url(../assets/bgh.jpg) repeat";
            mainContent.style.backgroundSize = "cover";
            mainContent.style.transition = 'opacity 0.5s ease-in-out';

            container.style.backgroundColor = "rgba(236, 1, 217, 0.7)"; // Darken the background
            const msgText = "wishing you a day as Beautiful as you are Bangaram 😘😘🤗🤗 Lovee youuu a lott Chinniiii";
            typeText(introMsg, msgText, 100);
        }, 36000);

        setTimeout(() => {
            introTab.style.display = 'none'; // Hide intro tab
            mainContent.style.display = 'block'; // Show main content
            setTimeout(() => {
                mainContent.style.opacity = 1; // Fade in main content
            }, 1000); // Delay to ensure display change is applied
        }, 1500); // Match the CSS transition duration
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

    function calculateAge(birthDate) {
        const now = new Date();
        let years = now.getFullYear() - birthDate.getFullYear();
        let months = now.getMonth() - birthDate.getMonth();
        let days = now.getDate() - birthDate.getDate();
        let hours = now.getHours() - birthDate.getHours();
        let minutes = now.getMinutes() - birthDate.getMinutes();
        let seconds = now.getSeconds() - birthDate.getSeconds();

        // Adjust for negative values
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            months--;
            const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Last day of the previous month
            days += previousMonth.getDate();
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        // Calculate total days
        const diff = now - birthDate;
        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

        return { years, months, days, hours, minutes, seconds };
    }

    function displayAge() {
        const birthDate = new Date('2006-04-06'); // Replace with the actual birth date
        const ageDisplay = document.querySelector('#age-display');

        function updateAge() {
            const age = calculateAge(birthDate);
            if (ageDisplay) {
                ageDisplay.innerHTML = `
                    <p>Now my Aunty turns</p>
                    <p>${age.years} years, ${age.months} months</p>
                    <p>${age.days} days, ${age.hours} hours</p>
                    <p>${age.minutes} minutes, ${age.seconds} seconds old</p>
                `;
            }
        }

        updateAge(); // Initial update
        setInterval(updateAge, 1000); // Update every second
    }
});