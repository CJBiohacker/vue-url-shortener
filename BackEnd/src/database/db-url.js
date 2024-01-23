const Url = require("../models/url-model");

const findAll = () => Url.find({});
const find = (shortUrlId) => Url.findOne({ shortUrlId });
const save = (longURL, shortURL, shortUrlId) => Url.create({ longURL, shortURL, shortUrlId });
const erase = (shortUrlId) => Url.deleteOne({ shortUrlId });

module.exports = {
    save,
    find,
    findAll,
    erase
};