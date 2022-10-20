// Declaring const variables for game
const mansionExterior = document.querySelector('.mansion-exterior');
const playerLives = document.querySelector('#playerLives');
const playerLivesCat = 9;

// Setting the playersLives text content 
playerLives.textContent = playerLivesCat;

// Created an array of objects for my cards
const getData = () => [{
        imgSrc: '/assets/images/scary-pumpkin.png',
        name: 'scary pumpkin'
    },
    {
        imgSrc: '/assets/images/dracula.png',
        name: 'dracula'
    },
    {
        imgSrc: '/assets/images/ghost.png',
        name: 'ghost'
    },
    {
        imgSrc: '/assets/images/grim-reaper.png',
        name: 'grim reaper'
    },
    {
        imgSrc: '/assets/images/frankenstein.png',
        name: 'frankenstein'
    },
    {
        imgSrc: '/assets/images/mummy.png',
        name: 'mummy'
    },
    {
        imgSrc: '/assets/images/wicked-witch.png',
        name: 'wicked witch'
    },
    {
        imgSrc: '/assets/images/skeleton.png',
        name: 'skeleton'
    },
    {
        imgSrc: '/assets/images/scary-clown.png',
        name: 'scary clown'
    },
    {
        imgSrc: '/assets/images/scary-pumpkin.png',
        name: 'scary pumpkin'
    },
    {
        imgSrc: '/assets/images/dracula.png',
        name: 'dracula'
    },
    {
        imgSrc: '/assets/images/ghost.png',
        name: 'ghost'
    },
    {
        imgSrc: '/assets/images/grim-reaper.png',
        name: 'grim reaper'
    },
    {
        imgSrc: '/assets/images/frankenstein.png',
        name: 'frankenstein'
    },
    {
        imgSrc: '/assets/images/mummy.png',
        name: 'mummy'
    },
    {
        imgSrc: '/assets/images/wicked-witch.png',
        name: 'wicked witch'
    },
    {
        imgSrc: '/assets/images/skeleton.png',
        name: 'skeleton'
    },
    {
        imgSrc: '/assets/images/scary-clown.png',
        name: 'scary clown'
    }
];

// Function for shuffling and retrieving the card data
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

// Function for generating cards (imagined as the windows of the mansion exterior) inside html page
const cardGenerator = () => {
    const cardData = randomize();
    // Loop for 18 individual cards from the array
    cardData.forEach((item) => {
        const mansion = document.createElement('div');
        const mansionWindowOpened = document.createElement('img');
        const mansionWindowClosed = document.createElement('img');
        mansionWindowClosed.setAttribute('src', 'assets/images/gothic-window.png')

        // Setting some class names
        mansion.classList = 'mansion';
        mansionWindowOpened.classList = 'window-opened';
        mansionWindowClosed.classList = 'window-closed';

        // Getting the halloween characters by accessing the objects>imgSrc
        mansionWindowOpened.src = item.imgSrc;
        
        // Placing the windows onto the mansion
        mansionExterior.appendChild(mansion);
        mansion.appendChild(mansionWindowOpened);
        mansion.appendChild(mansionWindowClosed);
    });
};

cardGenerator();