var Person = require('./person.js');
//require是同步的，有回调函数的是异步的，能直接通过返回值拿到内容的是同步的
console.log(Person); //{}

