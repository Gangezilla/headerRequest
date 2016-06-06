var express = require('express');
var request = require('request');
var app = express();
var output= {
	'ip': null,
	'language': null,
	'software': null
};
var re=/\(([^)]+)\)/;

app.listen(3000, function() {});

app.get('/', function(req, res) {
    console.log(req);
    var userLang=(req.headers['accept-language']).split(',');
    output.language=userLang[0];
    output.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
    output.software=(re.exec(req.headers['user-agent'])[1]);
    console.log(output);
});

//need to figure out if my ip section is because my internet is down or because i did something wrong (porque no los dos)? otherwise, close!