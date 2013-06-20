/**
 * index.js 处理文件顺序
 *
 */
var server = require('./server');
var routers = require('./routers');
var reqHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = reqHandlers.start;
handle['/start'] = reqHandlers.start;
handle['/upload'] = reqHandlers.upload;
handle['/show'] = reqHandlers.show;

server.start(routers.route, handle);