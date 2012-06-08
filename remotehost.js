const fs = require("fs"),
      https = require("https"),
      request = require('request'),
			url = require('url'),
			qs = require('querystring')
;

var options = {
  key: fs.readFileSync('../privatekey.pem'),
  cert: fs.readFileSync('../certificate.pem')
};

https.createServer(options, function (req, res) {
	var q = url.parse(req.url).query,
			d = qs.parse(qs.unescape(q))
	;
		
	try{
		request[d.method]({
			uri: d.uri,
			headers: JSON.parse(d.headers)
		}).pipe(res);	
	}
	catch(err){
		res.writeHead('200');
		res.end('there was an error')
	}
		
}).listen(443);
