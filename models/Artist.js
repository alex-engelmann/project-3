const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose/MongoDB: Generates new Schema for Articles
const ArtistSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    artworks: {
        type: Array,
    },
    about: {
        type: String,
        default: 'No description this time!'
    },
    image: {
        type: String,
        default: 'No image this time!'
    },
    links: {
        type: Array,
    }
});

module.exports = Artists = mongoose.model('artist', ArtistSchema);