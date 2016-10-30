/**
 * Created by MaoerBaby on 2016/10/30.
 */
console.log(this); //在文件中直接访问this 不是global
/*
(function () {
   console.log(this);
})();*/
var a = 100;
global.a = function () {
    
}
console.log(global.a); //直接var的变量不会直接挂载在global上
//特点 可以在全局下任何地点访问

//exports 导出   this = module.exports = exports = {}
console.log(this===module.exports);

global.console.log('hello');
console.log(global);
// process 进程
// Buffer 缓存
// clearImmediate
// clearInterval: [Function],
// clearTimeout: [Function],
// setImmediate: [Function],
// setInterval: [Function],
// setTimeout: [Function],
// console: [Getter],

console.error('error'); //输出错误
console.info('info'); //输出信息
console.log('log'); //输出日志
console.warn('warn'); //输出警告 //顺序是不固定


console.time('end');//计算时间差
setTimeout(function () {
    console.timeEnd('end'); //结束时间和开始时间的时间差
},2000);
//C:\Users\10354_000\Desktop\node9\2.node\2.global.js 当前文件绝对路径,不是global上的属性
console.log(__filename);
//在函数中可以直接访问的变量
//global属性和形参，在文件外面执行的时候会自动的包一个函数，

//C:\Users\10354_000\Desktop\node9\2.node 当前文件所在的文件夹的路径,不是global上的属性
console.log(__dirname);


//setTimeout异步方法，可以通过多个参数进行传参
function fn(b,e) {
    console.log('setTimout',b,e);
}
setTimeout(fn,2000,100,200);




/*
在文件中执行代码会执行从外部传入进来五个形参，在文件中是可以直接访问的
require:'需要',
exports:'导出'，
module:'模块'
__dirname:'所在的目录名路径'
__filename:'文件的名字路径'
(function (require,exports,module,__dirname,__filename) {
 console.log(exports)
})()*/
