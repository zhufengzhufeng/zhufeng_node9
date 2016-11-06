var fs = require('fs');
var rs = fs.createReadStream('./name.txt',{highWaterMark:3});
rs.setEncoding('utf8'); //设置编码格式
//如果编码格式是utf8 最小水位线就是3
var str = '';
//暂停出水 开启出水
rs.on('data',function (data) { //默认每次读取64k 是怎么读的，不停的以最快速度将内容读取到内存中
    str+=data;
    console.log('出水');
    rs.pause(); //停止触发data事件
});
var timer = setInterval(function () {
    rs.resume(); //恢复触发resume事件
},1000);
rs.on('end',function () {
    console.log(str);
    clearInterval(timer);
});
// pause resume data end error