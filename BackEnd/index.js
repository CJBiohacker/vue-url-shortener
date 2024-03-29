const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodeCron = require("node-cron");
const utils = require("./src/common/utils");
const urlService = require("./src/services/url.service");
require("dotenv").config();

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

const corsOptions = {
  origin: `${process.env.CLIENT_URL}`,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening in port: ${port}`));

app.get("/all", async (req, res) => {
  let resp;

  try {
    const urls = await urlService.findAll();
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
    resp = res.status(500).send("<h3>Error. Please try again.</h3>");

    return resp;
  }
});

app.get("/:shortUrlId", async (req, res) => {
  let resp;

  try {
    const url = await urlService.find(req.params.shortUrlId);
    resp = !url
      ? res.status(404).send("<h3>ShortURL ID not found.</h3>")
      : res.redirect(301, url.longURL);

    return resp;
  } catch (error) {
    resp = res.status(500).send("<h3>Error. Please try again.</h3>");

    return resp;
  }
});

app.post("/url", async (req, res) => {
  let resp;

  try {
    if (utils.validateUrl(req.body.url)) {
      return res.status(400).send(`<h3>Invalid URL.</h3>`);
    }

    const urlKey = utils.generateUrlKey();
    const shortUrl = `http://${host}:${port}/${urlKey}`;
    await urlService.save(req.body.url, shortUrl, urlKey);
    resp = res.status(200).send({ shortUrl });

    return resp;
  } catch (error) {
    resp = res
      .status(500)
      .send(`<h3>The following error has occurred: ${error}.</h3>`);

    return resp;
  }
});

app.delete("/:shortUrlId", async (req, res) => {
  let resp;
  try {
    const url = await urlService.find(req.params.shortUrlId);
    resp = !url
      ? res.status(404).send("<h3>ShortURL ID not found.</h3>")
      : await urlService.erase(req.params.shortUrlId);

    return resp;
  } catch (error) {
    resp = res.status(500).send("<h3>Error. Please try again.</h3>");

    return resp;
  }
});

app.put("/:shortUrlId", async (req, res) => {
  let resp, longURL;

  try {
    if (req.body.longURL) {
      longURL = req.body.longURL;
    } else {
      resp = await urlService.find(req.params.shortUrlId);
      longURL = resp.longURL;
    }

    const shortUrlId = { shortUrlId: req.params.shortUrlId };
    const update = await urlService.update(shortUrlId, longURL);
    if (update.matchedCount === 0) {
      resp = res.status(404).send(`<h3>URL was not found.</h3>`);
    } else {
      resp = res.status(200).send(`<h3>URL updated.</h3>`);
    }

    return resp;
  } catch (error) {
    resp = res.status(500).send("<h3>Error. Please try again.</h3>");

    return resp;
  }
});

// Cron job scheduled at minute 0 past every 12th hour, to remove any documents created more than 24 hours ago
nodeCron.schedule(
  "0 */12 * * *",
  () => {
    console.log("Running job to remove expired documents...");
    utils.removeExpiredDocuments();
  },
  {
    timezone: "America/Sao_Paulo",
  }
);
