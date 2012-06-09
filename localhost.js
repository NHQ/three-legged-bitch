var request = require('request')
	,	http = require('http')
	,	url = require('url')
	,	qs = require('querystring')
	,	remoteHost = '74.207.246.247' // change this to your server's domain or IP address
;

http.createServer(function(req, res){

	var o = Object.create(null);
	
	o.headers = JSON.stringify(req.headers);
	o.uri = req.url;
	o.method = req.method.toLowerCase();
	
	var q = qs.escape(qs.stringify(o));
	
	request({
		uri: 'https://' + remoteHost + '?' + q
	}).pipe(res)
	
}).listen(8000)