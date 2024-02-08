const validate = require("validate.js");
const shortId = require("shortid");
const mongoDbClient = require("../database/db-config");

const validateUrl = (url = "") => {
  return validate(
    { website: url },
    {
      website: {
        url: {
          allowLocal: true,
        },
      },
    }
  );
};

const generateUrlKey = () => shortId.generate();

const getMongoDbCollection = async (client) =>
  client
    .db(process.env.MONGO_DB_DATABASE)
    .collection(process.env.MONGO_DB_COLLECTION);

const removeExpiredDocuments = async () => {
  try {
    await mongoDbClient.connect();
    const collection = await getMongoDbCollection(mongoDbClient);
    const expirationThreshold = new Date();
    expirationThreshold.setHours(expirationThreshold.getHours() - 24);

    const query = { createdAt: { $lte: expirationThreshold } };
    const result = await collection.deleteMany(query);

    console.log(`${result.deletedCount} documents removed.`);
  } catch (error) {
    console.error("Error removing expired documents:", error);
  } finally {
    await mongoDbClient.close();
  }
};

module.exports = { validateUrl, generateUrlKey, getMongoDbCollection, removeExpiredDocuments};
