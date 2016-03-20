var nodePPT=require('nodeppt/lib/nodePPT.js');
var ipv4 = require('ipv4');

var cmd={
	host:process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
	port: process.env.OPENSHIFT_NODEJS_PORT || '8080',
	socket:'support websocket mutil screen controller',
	watch:'livereload',
	dir:'ppts'
}
nodePPT.start(cmd);
