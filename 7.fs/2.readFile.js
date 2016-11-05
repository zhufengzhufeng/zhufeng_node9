var fs = require('fs');
var person = {};
//读取age需要5s
fs.readFile('./age.txt','utf8',function (err,data) {
    person.age = data; //读完age后
    out();
});
//读取6秒
fs.readFile('./name.txt','utf8',function (err,data) {
    person.name = data; //此时获取了name和age
    out();
});
function out() {
    if(Object.keys(person).length==2){
        console.log(person);//数据拿到了 可以继续了
    }
}


