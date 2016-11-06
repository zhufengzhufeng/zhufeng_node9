var http = require('http');
var fs = require('fs');
var crypto = require('crypto');
var path = require('path');
var mime = {
    '.css':'text/css',
    '.js':'application/x-javascript'
};
http.createServer(function (req,res) {
    if(req.url == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else{
        //req.url  /index.js  /favicon.ico
        fs.exists('.'+req.url,function (exists) {
            if(exists){
                res.setHeader('Content-Type',mime[path.extname(req.url)]+';charset=utf8');
                fs.createReadStream('.'+req.url).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('not found');
            }
        })
    }
}).listen(3001);