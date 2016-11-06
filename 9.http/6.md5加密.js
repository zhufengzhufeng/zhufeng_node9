//md5是一种摘要算法
//1.不可逆
//2.不管多长的文件，产出的长度是相同的
//3.不同的内容生成md5肯定不相同
var crypto = require('crypto'); //node的加密方法
console.log(crypto.getHashes());
// 111加密
console.log(crypto.createHash('md5').update('123456').digest('hex'));
//4297f44b13955235245b2497399d7a93
//5fc64caa9ce94706f4bbb8c591c3fead

//当前文件 写了一个console.log()  4297f44b13955235245b2497399d7a93
//console.log(1)                 5fc64caa9ce94706f4bbb8c591c3fead