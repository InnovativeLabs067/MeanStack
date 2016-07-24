/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import path = require("path");
import http = require("http");

var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use((request: express.Request, response: express.Response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Looks like you didn’t find a static file.");
});

http.createServer(app).listen(3000);
