// Declaring const variables for game
const section = document.querySelector('section');
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
 
// Function for generating cards (imagined as the window of the mansion) inside html page
const cardGenerator = () => {
    const cardData = randomize();
    // Loop for generating 18 individual cards from the array
cardData.forEach((item) => {
    console.log(item);
});
    const mansion = document.createElement('div');
    const mansionWindowOpened = document.createElement('img');
    const mansionWindowClosed = document.createElement('img');
    // Setting some class names
    mansion.classList = 'mansion';
    mansionWindowOpened.classList = 'window-opened';
    mansionWindowClosed.classList = 'window-closed';
};

cardGenerator();