# URL Shortener Web App

This project, as the name implies, is a web app to shorten any URL saved in the database.<br/>
It can be used to reduce the URL character size to make it easier to share the link.<br/>
Important reminder: This short link and the link ID generated will be used as a reference to access the original URL.

# Technology

FrontEnd - VueJS<br/>
BackEnd - NodeJS<br/>
Database - MongoDB<br/>
QA Testing - NodeJS Test Runner

# Pre-requisites and Installation

 - NodeJS v16.17.0 until v18.x.x (Use the [Node Version Manager](https://github.com/nvm-sh/nvm) to install the correct version)
 - Clone this repository.
 - Open the bash terminal in the repository, change the directory path to `/BackEnd` and run the command `npm i` or `npm install` to install all BackEnd packages.
 - Change the directory path to `/FrontEnd` and run the command `yarn` or `yarn install` to install all FrontEnd packages.
 - After all is installed, start the local server running the command `npm run server` in the path `/BackEnd`.
 - Then, start the Web Application running the command `yarn dev` in the path `/FrontEnd`.

# How it Works

This project is structured in something as close as the MVC software design pattern.<br/>
With the Controller and Model parts in the path `/BackEnd`, and the View part in the `/FrontEnd` folder.<br/>
The Controller is located in the path `/BackEnd/src/services` containing the main functions that execute a basic CRUD in the NoSQL Database.<br/>
The routes are all set in the path `/BackEnd/index.js` which will be specified in the <a href="#restApi" >REST API Instructions</a> section.

<h1 id="restApi" >REST API Instructions</h1>