//创建一个可读流 和一个可写流
//1.每次读入一次后开始写入 在on data 中调用wirte方法
//2.当文件不能写入时 暂停读取 如果写入返回false 调用pause
//3.等待抽干后再调用恢复方法，恢复读取 在drain方法中调用resume
//4.监听读取后关闭掉写入方法ws.end方法 rs.on('end')方法中调用ws.end
var fs = require('fs');
function pipe(source,target) {
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.on('data',function (data) {
        var flag = ws.write(data);
        if(!flag){rs.pause();}
    });
    ws.on('drain',function () {
        console.log('干了');
        rs.resume();
    });
    rs.on('end',function () {
        ws.end();
    });
}
pipe('./name.txt','./name1.txt');
