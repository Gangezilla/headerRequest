var express = require('express');
var app = express();
var output= {
	'ip': null,
	'language': null,
	'software': null
};
app.listen(3000);

app.get('/', function(req, res) {
    getData(req);
    res.send(output);
});

function getData(req) {
    var userLang=(req.headers['accept-language']).split(',');
    output.language=userLang[0];
    output.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    output.software=(/\(([^)]+)\)/.exec(req.headers['user-agent'])[1]);
}