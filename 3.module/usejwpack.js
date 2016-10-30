// 引用文件采用的是./ 文件模块
// 第三方模块
// 核心模块
require('jwnewpack');
//他会找node_modules文件夹 找对应的jwnewpack文件名
//先找文件里是否包含index.js index.json ,会查找package.json里对应的main字段，找到对应的执行文件，如果没有像上级查找，直到根目录结束，如果没有报错
console.log(module.paths); //查找目录的顺序