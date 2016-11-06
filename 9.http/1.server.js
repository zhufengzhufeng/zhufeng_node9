//需要创建一个http服务，node给我们提供了一个模块,http
var http = require('http');
var server = http.createServer(function (req,res) {
    //req客户端的请求
    //res是服务端的响应  res是个流 可写流  req是个流 可读流
    /*res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});*/
    //statusCode + setHeader = writeHead
    //要根据请求的内容返回不同的结果  路由
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.statusCode = 200;
    res.write('你好');
    res.end('世界');
});
server.listen(8888,'localhost');