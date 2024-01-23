const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

const services = require("./src/services/url.service");
const database = require("./src/database/db-config");
const urlDb = require("./src/database/db-url");

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening in port: ${port}`));

app.get("/all", async (req, res) => {
    let resp;

    try {
        const urls = await urlDb.findAll();
        const formattedURls = [];

        for (const item of urls) {
            formattedURls.push({
                shortUrlId: item.shortUrlId,
                longURL: item.longURL,
            });
        }

        resp = res.status(200).send(formattedURls);

        return resp;
    } catch (error) {
        resp = res.status(500).send("Error. Please try again.");

        return resp;
    }
});

app.get("/:shortUrlId", async (req, res) => {
    let resp;

    try {
        const url = await urlDb.find(req.params.shortUrlId);
        resp = !url ? res.status(404).send("ShortURL ID not found") : res.redirect(301, url.longURL);
 
        return resp;
    } catch (error) {
        resp = res.status(500).send("Error. Please try again.");

        return resp;
    }
});

app.post("/url", async (req, res) => {
    let resp;

    try {
        if (!!services.validateUrl(req.body.url)) {
            return res.status(400).send({ msg: "Invalid URL." });
        }

        const urlKey = services.generateUrlKey();
        const shortUrl = `http://${host}:${port}/${urlKey}`;

        await urlDb.save(req.body.url, shortUrl, urlKey);
        resp = res.status(200).send({ shortUrl });

        return resp;
    } catch (error) {
        resp = res.status(500).send({ msg: `The following error has occurred: ${error}` });

        return resp;
    }
});

app.delete("/:shortUrlId", async (req, res) => {
    let resp;
    try {
        const url = await urlDb.find(req.params.shortUrlId);
        resp = !url ? res.status(404).send("ShortURL ID not found") : await urlDb.erase(req.params.shortUrlId);

        return resp;
    } catch (error) {
        resp = res.status(500).send("Error. Please try again.");

        return resp;
    }
});