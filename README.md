# URL Shortener Web App

This project, as the name implies, is a web app to shorten any URL saved in the database.<br>
It can be used to reduce the URL character size to make it easier to share the link.<br>
This short link and the link ID generated will be used as a reference to access the original URL.

# Technology

| Technology | Version |
|----------|------|
| VueJS | 3.3.11 |
| Vuetify | 3.5.1 |
| Vite | 5.0.8 |
| NodeJS | 20.11.0 |
| Express | 4.18.2 |
| MongoDB | 6.3.0 |

# Pre-requisites and Installation

 - Download or set NodeJS version to any version between 16.17.0 to LTS (Use the [Node Version Manager](https://github.com/nvm-sh/nvm) to install the correct version)
 - Clone this repository.
 - Open the bash terminal in the repository, change the directory path to `/BackEnd` and run the command `npm i` or `npm install` to install all BackEnd packages.
 - Change the directory path to `/FrontEnd` and run the command `yarn` or `yarn install` to install all FrontEnd packages.
 - After all is installed, start the local server running the command `npm run server` in the path `/BackEnd`.
 - Then, start the Web Application running the command `yarn dev` in the path `/FrontEnd`.

# How it Works

This project is structured in something as close as the MVC software design pattern.<br>
With the Controller and Model parts in the path `/BackEnd`, and the View part in the `/FrontEnd` folder. 
The Controller is located in the path `/BackEnd/src/services` containing the main functions that execute a basic CRUD in the NoSQL Database.
The routes are all set in the path `/BackEnd/index.js` which will be specified in the <a href="#restApi" >REST API Instructions</a> section.

You will need to create a MongoDB database connection (try the [official docs](https://www.mongodb.com/docs/atlas/getting-started/)) and create a `.env` file in the directory path to `/BackEnd`. In this file you need to set these environment variables:

### Example:
    PORT=1234
    HOST=localhost
    MONGO_DB_USERNAME="testUser"
    MONGO_DB_PASSWORD="12345678"
    MONGO_DB_DATABASE="mongoTest"
    MONGO_DB_COLLECTION="collTest"
    MONGO_DB_URI="mongodb+srv://{username}:{password}@mongotestdb.abcdsz.mongodb.net/?retryWrites=true&w=majority"

#### Observation:
In the `MONGO_DB_URI` you must be careful when passing you Mongo Driver connection link to not expose your real username and password.
It needs to follow the exactly format specified above, because it will be replaced in the `/BackEnd/src/database/db-config.js` code section below:

    const user = encodeURIComponent(process.env.MONGO_DB_USERNAME);
    const password = encodeURIComponent(process.env.MONGO_DB_PASSWORD);

    let URI = process.env.MONGO_DB_URI;
    URI = URI.replace("{username}", user);
    URI = URI.replace("{password}", password);


<h1 id="restApi" >REST API Instructions</h1>

| HTTP Method | Endpoint | Params | Description |
|-------------|----------|--------|-------------|
|`GET` | `/:shortUrlId` | `shortUrlId: String` | Request to get a shortened url by the id |
| `GET`(ALL) | `/all` | `None`| Request to get all shortened url's |
| `POST` | `/url` | `shortUrlId: String` <br> `shortId: String` <br> `longURL: String`| Request to add a new shortened url |
| `DELETE` | `/:shortUrlId` | `shortUrlId: String` | Request to delete an existing shortened url |
| `PUT` | `/:shortUrlId` | `shortUrlId: String` <br> `longURL: String` | Request to update an existing shortened url |