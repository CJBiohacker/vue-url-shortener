const mongoose = require("mongoose");
require("dotenv").config();

const user = encodeURIComponent(process.env.MONGO_DB_USERNAME);
const password = encodeURIComponent(process.env.MONGO_DB_PASSWORD);

let URI = process.env.MONGO_DB_URI;
URI = URI.replace("<username>", user);
URI = URI.replace("<password>", password);

mongoose.connect(URI);