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
        about: "A short about me for the author.",
        image: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/45057884_2024792320914623_3144714074185531392_n.jpg?_nc_cat=102&_nc_oc=AQm2oiGAcsDFPYR8NIUWKB4lZ4Go74NEgF5VY2dGwp2oJHUQ2257KXmRepw4Ba__Bvw&_nc_ht=scontent-lax3-2.xx&oh=7bcbc95824d74d785a9664f7377c99d8&oe=5DA00282",
        links: [
            "facebook.com",
            "instagram.com"
        ]
    },
    {
        firstName: "Jimmy",
        lastName: "GG",
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
        about: "A short about me for the author.",
        image: "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
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