/// <reference path="./typings/tsd.d.ts" />
var Mustache = require("mustache");
var result = Mustache.render("Hi, {{first}} {{last}}!", {
    first: "Nicolas",
    last: "Cage"
});
console.log(result);
