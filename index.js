var nodePPT=require('nodeppt/lib/nodePPT.js');

var cmd={
	host:process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
	port: process.env.OPENSHIFT_NODEJS_PORT || '8080',
	socket:'support websocket mutil screen controller',
	watch:'livereload',
	dir:''
}
nodePPT.start(cmd);