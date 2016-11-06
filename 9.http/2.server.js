var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
    console.log(req.url); //默认跟路径是/
    console.log(req.method); //请求的方法
    console.log(req.headers); //获取所有请求头,通过小写的属性名来获取内容
    if(req.url == '/'){
        //先将内容读取到内存中，在将内容写入到浏览器
        //设置响应类型
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res); //异步方法
        /*fs.readFile('./index.html',function (err,data) {
            res.end(data);
        });*/
    }else if(req.url == '/index.js'){
        //需要配置缓存
        res.setHeader('Content-Type','application/x-javascript;charset=utf8');
        fs.createReadStream('./index.js').pipe(res);
    }else{
        res.statusCode = 404;
        res.end('not found');
    }
}).listen(8888);