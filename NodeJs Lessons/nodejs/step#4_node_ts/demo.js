///<reference path="./typings/node/node.d.ts" />
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    console.log("Request received");
    console.log("req.url");
    console.log(req.url);
    if (req.url == "/index.html") {
        fs.readFile("./index.html", function (er, data) {
            if (er) {
                res.write("Somthing wrong");
                res.end(er, toString());
                return;
            }
            //res.write("File loaded");//readfile
            res.write(data.toString());
            res.end();
        });
    }
    else if (req.url == "/about.html") {
        fs.readFile("./about.html", function (er, data) {
            if (er) {
                res.write("something is wrong");
                res.end(er, toString());
                return;
            }
            res.write(data.toString());
            res.end();
        });
    }
    else if (req.url == "/contact") {
        res.write("<html>");
        res.write("<body>");
        res.write("<h1 style='background:red;'>Contact</h1>");
        res.write("<input type='text' name='subject' />");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else {
        res.write("<h1>Webpage is not available</h1>");
        res.end();
    }
}).listen(3000);
