function typeText(element, text, delay = 100) {
    let index = 0;
    element.innerHTML = '';
    const interval = setInterval(() => {
        if (index < text.length) {
            if (text[index] === '<') {
                const closingIndex = text.indexOf('>', index);
                if (closingIndex !== -1) {
                    element.innerHTML += text.slice(index, closingIndex + 1);
                    index = closingIndex + 1;
                    return;
                }
            }
            element.innerHTML += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

document.addEventListener('DOMContentLoaded', function() {
    let x = 0;
    const loadingScreen = document.getElementById('loading-screen');
    const introTab = document.getElementById('intro-tab');
    const mainContent = document.querySelector('main');
    const startButton = document.getElementById('start-button');
    const introContainer = document.querySelector('.intro-container');
    const ccHeading = document.querySelector('#intro-container h1');
    const introMessage = document.querySelector('#intro-container h2');
    const messageText = 'Wish you a very veryy<br>Happy Birthdayyyy Babyy <br> <img src="../assets/heart2.jpg" alt="">';
    const container = document.querySelector('.container');

    const loadingMessage = document.querySelector('#loading-screen h1');
    const loadingText = 'Chinniiii.... ';
    typeText(loadingMessage, loadingText, 150);

    const introAudio1 = new Audio('../assets/song1.mp3');
    const introAudio2 = new Audio('../assets/song2.mp3');
    introAudio1.volume = 0.3;
    introAudio2.volume = 0.3;
    const introImage = document.querySelector('#intro-tab');

    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            introTab.style.display = 'flex';
        }, 1000);
    }, 1800);

    introImage.addEventListener('click', function() {
        introAudio1.play();
        introImage.classList.add('heartbeat');
        ccHeading.textContent= '';
        introMessage.style.display = 'block';
        introMessage.style.opacity = 1;
        introMessage.style.transition = 'opacity 0.5s ease-in-out';

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
    });

    startButton.addEventListener('click', function() {
        introAudio1.pause();
        introAudio1.muted = true;
        introAudio2.play();

        introTab.style.opacity = 0;
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

            container.style.backgroundColor = "rgba(236, 1, 217, 0.7)";
            const msgText = "wishing you a day as Beautiful as you are Bangaram 😘😘🤗🤗 Lovee youuu a lott Chinniiii";
            typeText(introMsg, msgText, 100);
        }, 36000);

        setTimeout(() => {
            introTab.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.style.opacity = 1;
            }, 1000);
        }, 1500);
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
            wishItem.style.opacity = 0;
            wishesList.appendChild(wishItem);

            setTimeout(() => {
                wishItem.style.transition = 'opacity 0.5s';
                wishItem.style.opacity = 1;
            }, 10);

            wishInput.style.transition = 'background-color 0.3s';
            wishInput.style.backgroundColor = '#d4edda';
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
            const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += previousMonth.getDate();
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        const diff = now - birthDate;
        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

        return { years, months, days, hours, minutes, seconds };
    }

    function displayAge() {
        const birthDate = new Date('2006-04-06');
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

        updateAge();
        setInterval(updateAge, 1000);
    }
});