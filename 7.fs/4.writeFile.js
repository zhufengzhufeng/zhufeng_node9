//读写都是有同步代码和异步代码

var fs = require('fs');
//第二个参数是内容，默认写入utf8
fs.writeFileSync('./name1',new Buffer('珠峰培训'));
//写入的方法，会先清空文件中的内容，如果文件不存在则会创建文件
fs.writeFile('./name1',new Buffer('珠峰培训1'),function () {
    //成功后的回调，当写入完成时执行的函数
});
/* 追加文件内容 
fs.appendFile();
fs.appendFileSync();*/

//写一个拷贝文件的方法 同步异步的, 先读取在写入
function copySync(source,target) {

}
copy('./name.txt','./name1.txt');
function copy(source,target) {
    
}
copy('./name.txt','./name1.txt');
