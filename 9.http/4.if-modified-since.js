var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
    if(req.url == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url == '/index.js'){
        var timer = fs.statSync('./index.js').ctime.toUTCString();
        var ctime = req.headers['if-modified-since']; //上一次修改时间
        if(ctime&&(timer==ctime)){ //缓存的时间和当前修改过的时间相同，才会调用缓存
            res.statusCode = 304;
            res.end('');
        }else{
            res.setHeader('Last-Modified',timer);
            fs.createReadStream('./index.js').pipe(res);
        }
    }else{
        res.statusCode = 404;
        res.end('not found');
    }
}).listen(8888);


