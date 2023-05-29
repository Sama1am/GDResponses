var express = require("express")
const path = require("path");
const { join } = require("path");
const lectureRouter = express.Router();

lectureRouter.get("/lecture01", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/lecture01.html'));
  });

lectureRouter.get("/lecture02", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/lecture02.html'));
  });

lectureRouter.get("/lecture03", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/lecture03.html'));
  });

lectureRouter.get("/lecture04", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/lecture04.html'));
  });

lectureRouter.get("/lecture05", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/lecture05.html'));
  });

  lectureRouter.get("/lecture06", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/lecture06.html'));
  });

module.exports = lectureRouter;


   
