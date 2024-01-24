const Url = require("../models/url-model");

const findAll = () => Url.find({});
const find = (shortUrlId) => Url.findOne({ shortUrlId });
const save = (longURL, shortURL, shortUrlId) => Url.create({ longURL, shortURL, shortUrlId });
const erase = (shortUrlId) => Url.deleteOne({ shortUrlId });
const update = (shortUrlId, update) => Url.findOneAndUpdate({ shortUrlId }, update);

module.exports = {
    save,
    find,
    findAll,
    erase,
    update
};