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

// Function for retrieving the cards in a random order
const randomize = () => {
const cardData = getData();
}
