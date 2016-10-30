var a = require('./cache.js');
delete require.cache[require.resolve('./cache.js')];//模块缓存的文件是可以删除的
var a = require('./cache.js');
//多次引用同一个模块不会被重复加载
//会将加载的模块进行缓存
console.log(require["cache"]); //根据绝对地址来缓存
//想删除缓存，构建一个绝对路径，通过路径去对象中查找，删除掉对应的模块

//通过名字,构造出一个绝对路径来
console.log(require.resolve('./cache.js'));
//在去对象中删除



