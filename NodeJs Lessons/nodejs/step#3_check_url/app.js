var http=require('http');
var fs=require('fs');
http.createServer(function(req,res)
	{
		console.log("Req. received");
		console.log(req.url);
		
		if(req.url == "/home.html")
		{		
		fs.readFile('./home.html', function (er, data) {
			console.log(er);
			//console.log(data.toString());
			res.end(data.toString());
		})
		}
		
		else if(req.url=="/contact.html")
		{
			fs.readFile('./contact.html',function(er,data)
				{
					//res.write(data.toString());
					res.end(data.toString());
					
				})
		}
		else if(req.url=="/about.html")
		{
			fs.readFile('./about.html',function(er,data)
				{
					res.write(data.toString());
					res.end();
					
				})
		}
		else if(req.url=="/")
		{
			fs.readFile('./script.js',function(er,data)
				{
					res.write(data.toString());
					res.end();
				})
		}
		else if(req.url=="/script")
		{
			res.write("<html>");
			res.write("<head><script>alert('script loaded')</script></head>");
			res.write("</html>");
			res.end();
		}
		else
		{
			res.end("Invalid page");
		}
	
		
	}).listen(3000);