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

module.exports = { validateUrl, generateUrlKey };