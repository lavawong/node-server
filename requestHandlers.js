/**
 * requestHandlers.js
 *
 */
var fs = require('fs');
var formidable = require("formidable");

var showError = function(status, msg){
  res.writeHead(status, {"Content-Type": "text/plain"});
  res.write(msg);
  res.end();
}

var start = function(req, res){
  fs.readFile('start.html', function (err, data) {
    if (err) {
      showError(404, '文件未找到');
    } else {
      res.writeHead(200, {"Content-Type": "text/html;"});
      res.write(data);
      res.end();
    }
  
  });
}


var upload = function(req, res){
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(req, function(error, fields, files) {
    //console.dir(files.upload);
    fs.renameSync(files.upload.path, "tmp/test.png");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("received image:<br/>");
    res.write("<img src='/show' />");
    res.end();
  });
}


function show(req, res) {
  console.log("Request handler 'show' was called.");
  fs.readFile("/tmp/test.txt", "binary", function(error, file) {
    if(error) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.write(error + "\n");
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "image/png"});
      res.write(file, "binary");
      res.end();
    }
  });
}


exports.start = start;
exports.upload = upload;
exports.show = show;