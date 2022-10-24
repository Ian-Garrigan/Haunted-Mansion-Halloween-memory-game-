// Declaring const variables for game
const mansionExterior = document.querySelector('.mansion-exterior');
const playerLives = document.querySelector('#playerLives');
let playerLivesCat = 9;

// Setting the playersLives text content 
playerLives.textContent = playerLivesCat;

// Created an array of objects for my cards
const getData = () => [{
        imgSrc: 'assets/images/scary-pumpkin.png',
        name: 'scary pumpkin'
    },
    {
        imgSrc: 'assets/images/dracula.png',
        name: 'dracula'
    },
    {
        imgSrc: 'assets/images/ghost.png',
        name: 'ghost'
    },
    {
        imgSrc: 'assets/images/grim-reaper.png',
        name: 'grim reaper'
    },
    {
        imgSrc: 'assets/images/frankenstein.png',
        name: 'frankenstein'
    },
    {
        imgSrc: 'assets/images/mummy.png',
        name: 'mummy'
    },
    {
        imgSrc: 'assets/images/wicked-witch.png',
        name: 'wicked witch'
    },
    {
        imgSrc: 'assets/images/skeleton.png',
        name: 'skeleton'
    },
    {
        imgSrc: 'assets/images/scary-clown.png',
        name: 'scary clown'
    },
    {
        imgSrc: 'assets/images/scary-pumpkin.png',
        name: 'scary pumpkin'
    },
    {
        imgSrc: 'assets/images/dracula.png',
        name: 'dracula'
    },
    {
        imgSrc: 'assets/images/ghost.png',
        name: 'ghost'
    },
    {
        imgSrc: 'assets/images/grim-reaper.png',
        name: 'grim reaper'
    },
    {
        imgSrc: 'assets/images/frankenstein.png',
        name: 'frankenstein'
    },
    {
        imgSrc: 'assets/images/mummy.png',
        name: 'mummy'
    },
    {
        imgSrc: 'assets/images/wicked-witch.png',
        name: 'wicked witch'
    },
    {
        imgSrc: 'assets/images/skeleton.png',
        name: 'skeleton'
    },
    {
        imgSrc: 'assets/images/scary-clown.png',
        name: 'scary clown'
    }
];

// Function for shuffling and retrieving the card data
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

// Function for generating cards (imagined as the windows of the mansion exterior) inside html file
const cardGenerator = () => {
    const cardData = randomize();

    // Loop for 18 individual cards from the array
    cardData.forEach((item) => {
        let mansion = document.createElement('div');
        let mansionWindowOpened = document.createElement('img');
        let mansionWindowClosed = document.createElement('img');
        mansionWindowClosed.setAttribute('src', 'assets/images/creepy-window.png');

        // Setting some class names
        mansion.classList = 'mansion';
        mansionWindowOpened.classList = 'window-opened';
        mansionWindowClosed.classList = 'window-closed';
        mansionWindowOpened.setAttribute('alt', 'halloween monster');


        // Getting the halloween characters by accessing the objects>imgSrc
        mansionWindowOpened.src = item.imgSrc;
        mansion.setAttribute('name', item.name);

        // Placing the windows onto the mansion
        mansionExterior.appendChild(mansion);
        mansion.appendChild(mansionWindowOpened);
        mansion.appendChild(mansionWindowClosed);
        // Reveal monster behind window on click 
        mansion.addEventListener('click', (event) => {
            mansion.classList.toggle('reveal-monster');
            checkForMatch(event);
        });
    });
};

// Checking for possible card matches
const checkForMatch = (event) => {
    console.log(event);
    const clickedCard = event.target;
    clickedCard.classList.add('cardFlipped');
    const flippedWindows = document.querySelectorAll('.cardFlipped');
    const allCardsToggled = document.querySelectorAll('.reveal-monster');
    console.log(flippedWindows);

    if (flippedWindows.length === 2) {
        if (
            flippedWindows[0].getAttribute('name') ===
            flippedWindows[1].getAttribute('name')
        ) {
            console.log('match');
            flippedWindows.forEach((mansion) => {
                mansion.classList.remove('cardFlipped');
                mansion.style.pointerEvents = 'none';
            });
        } else {
            console.log('wrong');
            flippedWindows.forEach(mansion => {
                mansion.classList.remove('cardFlipped');
                setTimeout(() => mansion.classList.remove("reveal-monster"), 850);
            });
            playerLivesCat--;
            playerLives.textContent = playerLivesCat;
            // Run check for player lives equal 0 
            if (playerLivesCat === 0) {
                restart('You were too slow! The halloween monsters survived, better luck next year!');
            }
        };
    };
    // Check to see if user won the game
    if(allCardsToggled.length === 16) {
        restart('You found all the Halloween monsters, you win!');
    }
};

// Restart game funct when lives = 0 
const restart = (text) => {
    let cardData = randomize();
    let revealedMonsters = document.querySelectorAll('.window-opened');
    let cards = document.querySelectorAll('.mansion');
    // Fix for bug whislt cards flipping back not able to click on anything on the screen
    mansionExterior.style.pointerEvents = 'none';

    // If lives run out flip all the cards back to original position
    cardData.forEach((item, index) => {
        cards[index].classList.remove('reveal-monster');
        // making the cards random again and adding back pointer event when game restarts
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            revealedMonsters[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            mansionExterior.style.pointerEvents = 'all';
        }, 1000);
    });
    // Updating player lives count back to original state
    playerLivesCat = 9
    playerLives.textContent = playerLivesCat;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();