/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", function (request, response) {
    response.render("index", {
        message: "Hey everyone! This is my webpage."
    });
});
http.createServer(app).listen(3000);
