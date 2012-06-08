var request = require('request')
	,	http = require('http')
	,	url = require('url')
	,	qs = require('querystring')
	,	remoteHost = 'your remote server'
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