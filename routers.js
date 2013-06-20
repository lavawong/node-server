/**
 * @fileoverview routers.js
 *
 * @create ${date} ${time}
 * @author Qiangyee
 */
var route = function (path, handle, req, res){
  if (handle[path]) {
      handle[path](req, res);
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404, Not found!");
    res.end();
  }
}

exports.route = route;
