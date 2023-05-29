
//this creates the server
const express = require("express");
const bodyParser = require("body-parser");
const http = require('http');
const three = require("three");

//Routers section
const mainRouter = require("./routes/mainRoute");
const lectureRouter = require("./routes/lectureRoute");
const path = require("path");

const hostname = '127.0.0.1';
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", mainRouter);
app.use("/lecture", lectureRouter);

//app.use(express.static("scripts"));
app.use(express.static(__dirname + "/scripts/"));
app.use(express.static(__dirname + "/styling/")); 
app.use(express.static(__dirname + "/pictures/"));


//app.use(express.static('styling'));
//app.use(express.static('pictures'));

let server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});