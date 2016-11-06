//核心模块，专门处理 路径的一个模块
var path = require('path');
//获取不带后缀的文件名,可以指定扩展名留取想要的部分
console.log(path.basename('1.min.js','.min.js'));
//获取文件的扩展名, 读取最后一个.后的内容
console.log(path.extname('1.min.js'));
//1.连接路径
var str = 'a/b';//以当前文件解析出一个绝对路径
//获取当前文件所在的文件夹__dirname
//../表示上一级
console.log(path.join(__dirname,'a/../b'));
//require.resolve('./2.js');//要求必须根据一个存在的文件解析一个绝对路径
//2.解析路径的方法
console.log(path.resolve('../../100.js'));
/*
* basename
* extname
* join
* resolve
* */