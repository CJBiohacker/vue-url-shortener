const validate = require("validate.js");
const shortId = require("shortid");

const validateUrl = (url = "") => {
    return validate({ website: url }, {
        website: {
            url: {
                allowLocal: true
            }
        }
    });
}

const generateUrlKey = () => shortId.generate();

const getMongoDbCollection = async (client) => client.db(process.env.MONGO_DB_DATABASE).collection(process.env.MONGO_DB_COLLECTION);

module.exports = { validateUrl, generateUrlKey, getMongoDbCollection };