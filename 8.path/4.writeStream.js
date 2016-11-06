var fs = require('fs');
//如果文件不存在创建文件，默认写入为utf8编码格式
var ws = fs.createWriteStream('./name1.txt',{highWaterMark:1});
// console.log(ws);
//highWaterMark 16384 = 16*1024  按理说应该  如果无法写入就不要在读取了，等我都吃完了，在去读
//ws为可写流对象
//write end方法 (response)
var flag = ws.write('1');//必须是字符串或者buffer类型
var flag = ws.write('2'); //这个时候已经饱了，
ws.end();//一旦调用end方法，就会把所有地下的吃的全捡起来，并且把end中的内容，一起吃到肚子里，把嘴合上
console.log(flag); //表示写完这次以后，还可不可以继续写


