const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/artist', { useNewUrlParser: true }
);

const artistSeed = [
    {
        firstName: "Liam",
        lastName: "Hearts",
        artworks: [
            {
                img: "https://i.imgur.com/hAwDl3p.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://i.imgur.com/yldUXeH.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://i.imgur.com/YBwCqaY.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://i.imgur.com/qeuSjwD.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
        ],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."        ,
        image: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/45057884_2024792320914623_3144714074185531392_n.jpg?_nc_cat=102&_nc_oc=AQm2oiGAcsDFPYR8NIUWKB4lZ4Go74NEgF5VY2dGwp2oJHUQ2257KXmRepw4Ba__Bvw&_nc_ht=scontent-lax3-2.xx&oh=7bcbc95824d74d785a9664f7377c99d8&oe=5DA00282",
        links: [
            "facebook.com",
            "instagram.com"
        ]
    },
    {
        firstName: "Jim",
        lastName: "Tatarakis",
        artworks: [
            {
                img: "https://i.imgur.com/j9kMk1o.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://i.imgur.com/3vJl1CT.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://i.imgur.com/6SxI005.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://i.imgur.com/566eVl0.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
        ],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."        ,
        image: "https://avatars0.githubusercontent.com/u/47878388?s=400&u=f97e54ae067f02d4d5481ee34db60b7eb9700a0a&v=4",
        links: [
            "facebook.com",
            "instagram.com"
        ]
    },
    {
        firstName: "Josh",
        lastName: "Shellnutt",
        artworks: [
            {
                img: "https://cdnb.artstation.com/p/assets/images/images/007/999/575/large/joshua-shelnutt-ij-multivthumbs-crabguy-cannon.jpg?1509826244",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://cdna.artstation.com/p/assets/images/images/007/999/574/large/joshua-shelnutt-ij-multivthumbs-bomb-hammer.jpg?1509826241",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://cdna.artstation.com/p/assets/images/images/007/999/578/large/joshua-shelnutt-multivaluethumb-dogseat-scientistjohn-monsterwildman.jpg?1509826252",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://cdna.artstation.com/p/assets/images/images/007/999/576/large/joshua-shelnutt-ij-multivthumbs-davethewildman.jpg?1509826248",
                title: "N/A",
                description: "N/A",
                price: 15
            },
        ],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."        ,
        image: "https://cdnb.artstation.com/p/users/avatars/000/321/795/large/260a6a3b987a2bc9dd714a9b77a506f5.jpg?1556655174",
        links: [
            "facebook.com",
            "instagram.com"
        ]
    },
    {
        firstName: "Johanna",
        lastName: "Mahoney",
        artworks: [
            {
                img: "https://i.imgur.com/tECwCQB.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://i.imgur.com/OzvwsvK.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://i.imgur.com/KDLyZsA.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
            {
                img: "https://i.imgur.com/CCctokM.jpg",
                title: "N/A",
                description: "N/A",
                price: 15
            },
        ],
        about: "A short about me for the author.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPkfFeizMUsa95t-VmrkKwT1bJ7NI6qIeaedUlsMUxCRON52VQQ",
        links: [
            "facebook.com",
            "instagram.com"
        ]
    }
];

db.Artist
    .remove({})
    .then(() => db.Artist.collection.insertMany(artistSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });