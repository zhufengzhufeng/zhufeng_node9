//同步和异步共存
//异步有回调函数
//fs file system
var fs = require('fs');
//fs.readFile();//异步 不会阻塞主线程
//fs.readFileSync();//同步

try {
    var data = fs.readFileSync('./name.txt', 'utf8');
}catch(e){
    console.log(e);
}
//'r' read读取 'w' 写  'a'  追加
//encoding默认编码格式是null buffer类型
try{
    fs.readFile('./name1.txt','utf8',function (err,data) { //err first
        if(err) console.log(err);
        console.log(data);
    });
}catch(e){
    console.log('报错了');
}
//同步方法可以用try catch捕获到异常
