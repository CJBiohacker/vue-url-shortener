const mongoDbClient = require("../database/db-config");
const urlObjectModel = require("../models/url-model");
const { getMongoDbCollection } = require("../common/utils");
require("dotenv").config();

const findAll = async () => {
    try {
        await mongoDbClient.connect();
        const collection = await getMongoDbCollection(mongoDbClient);
        const result = await collection.find({}).toArray();

        return result;
    } catch (error) {
        console.log(error)
    } finally {
        mongoDbClient.close();
    }
};

const find = async (shortUrlId) => {
    try {
        await mongoDbClient.connect();
        const collection = await getMongoDbCollection(mongoDbClient);
        const result = await collection.findOne({ shortUrlId });

        return result;
    } catch (error) {
        console.log(error)
    } finally {
        mongoDbClient.close();
    }
};

const save = async (longURL, shortURL, shortUrlId) => {
    try {
        await mongoDbClient.connect();
        const urlObject = urlObjectModel(longURL, shortURL, shortUrlId);
        const collection = await getMongoDbCollection(mongoDbClient);
        const result = await collection.insertOne(urlObject);

        return result;
    } catch (error) {
        console.log(error)
    } finally {
        mongoDbClient.close();
    }
};
const erase = async (shortUrlId) => {
    try {
        await mongoDbClient.connect();
        const collection = await getMongoDbCollection(mongoDbClient);
        const result = await collection.deleteOne(shortUrlId);

        return result;
    } catch (error) {
        console.log(error)
    } finally {
        mongoDbClient.close();
    }
};

const update = async (shortUrlId, longURL) => {
    try {
        await mongoDbClient.connect();
        const collection = await getMongoDbCollection(mongoDbClient);
        const updateDoc = { $set: { longURL } };
        const result = await collection.updateOne(shortUrlId, updateDoc);

        return result;
    } catch (error) {
        console.log(error)
    } finally {
        mongoDbClient.close();
    }
};

module.exports = {
    save,
    find,
    findAll,
    erase,
    update
};