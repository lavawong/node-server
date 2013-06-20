/**
 * node js server demo
 * 
 */
var http = require('http');
var url  = require('url');

var start = function(route, handle){
  var onRequest = function(req, res){
    var pathname = url.parse(req.url).pathname;
    req.addListener("data", function(chunk) {
      // called when a new chunk of data was received
      console.log("data", chunk);
    });

    req.addListener("end", function() {
      // called when all chunks of data have been received
      console.log("end");
      route(pathname, handle, req, res);
    });
  };
  http.createServer(onRequest).listen(8888);
  console.log('server port 8888 has started!');
}
exports.start = start;