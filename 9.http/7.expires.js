var http = require('http');
var fs = require('fs');
var crypto = require('crypto');
http.createServer(function (req,res) {
    if(req.url == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url == '/index.js'){
        console.log(1);
        //如果在缓存时间内不用发送任何请求
         res.setHeader('Expires',new Date(new Date()+3000).toUTCString());
         res.setHeader('Cache-control','max-age=3');
         fs.createReadStream('./index.js').pipe(res);
    }else{
        res.statusCode = 404;
        res.end('not found');
    }
}).listen(3000);