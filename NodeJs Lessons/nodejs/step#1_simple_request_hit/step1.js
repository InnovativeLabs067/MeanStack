var http=require("http");
http.createServer(function (req,res) {
	console.log("Request sent");
}).listen(3000);