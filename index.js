var nodePPT=require('./lib/nodePPT.js');
var ipv4 = require('ipv4');

var cmd={
	host:process.env.OPENSHIFT_NODEJS_IP || process.env.NODE_PPT_HOST || ipv4 || '127.0.0.1',
	port: process.env.OPENSHIFT_NODEJS_PORT || process.env.NODE_PPT_PORT ||'8080',
	socket:'support websocket mutil screen controller',
	watch:'livereload',
	dir:'ppts'
}
nodePPT.start(cmd);
