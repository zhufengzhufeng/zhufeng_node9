var fs = require('fs');
var EventEmitter = require('events');
var e = new EventEmitter();
var person = {};
//读取age需要5s
fs.readFile('./age.txt','utf8',function (err,data) {
    person.age = data; //读完age后
    e.emit('输出结果');
});
//读取6秒
fs.readFile('./name.txt','utf8',function (err,data) {
    person.name = data; //此时获取了name和age
    e.emit('输出结果');
});
function out() {
    if(Object.keys(person).length == 2){
        console.log(person);
    }
}
e.on('输出结果',out);
//单核 可以有多个进程，一个进程有多个线程
