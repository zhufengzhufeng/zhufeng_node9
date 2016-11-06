var http = require('http');
var fs = require('fs');
var crypto = require('crypto');
http.createServer(function (req,res) {
    if(req.url == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url == '/index.js'){
        //内容频繁的更改，精确不到秒，很多服务器修改时间不准确
        //判断文件中的内容，比较上一次的内容，和这一次的内容，如果有区别说明更改过，发送一个最新的内容，给浏览器端
        var data = fs.readFileSync('./index.js');
        data = crypto.createHash('md5').update(data).digest('base64');
        console.log(data); //当前 ***
        //都能获取一个最新值和上次设置的比  if-none-match
        var match = req.headers['if-none-match']; //上一次  ***
        if(match&&(match==data)){
            res.statusCode =304;
            res.end('');
        }else{
            res.setHeader('Etag',data);//第一次访问时把内容进行加密放到头部
            fs.createReadStream('./index.js').pipe(res);
        }
    }else{
        res.statusCode = 404;
        res.end('not found');
    }
}).listen(3000);


//现在文件内容是 console.log('逗你玩哈哈21');   xMC5ckJoa2bSgEbhSdTeQg==
//             console.log('逗你玩哈哈22');    dmxTWY8kuvDJYAVaG++3iA==
