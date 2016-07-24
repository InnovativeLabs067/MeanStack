var http=require('http');
var num=3;
http.createServer(function (req,res)
	
	{
		//num++;
		console.log("Request received");
		console.log(num);
		res.writeHead(200,{'Context-type':'text/html'});
		//res.write("Helo");
		res.write("<html>");
		res.write("<head>");
		res.write("<title>step2</title>");
		res.write("</head>");
		res.write("<body>");
		res.write("<font color=green><h1>Html syntax works</h1></font>");
		res.write("<h2 style=color:blue;>Heading#2</h2>");
		res.write("</body>");
		res.write("</html>");
		//res.write(2);error
		res.end();
	}).listen(3000);
