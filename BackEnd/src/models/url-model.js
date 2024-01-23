const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    longURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true,
    },
    shortUrlId: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("URL", urlSchema);