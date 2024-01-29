const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

const user = encodeURIComponent(process.env.MONGO_DB_USERNAME);
const password = encodeURIComponent(process.env.MONGO_DB_PASSWORD);

let URI = process.env.MONGO_DB_URI;
URI = URI.replace("{username}", user);
URI = URI.replace("{password}", password);

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = client;