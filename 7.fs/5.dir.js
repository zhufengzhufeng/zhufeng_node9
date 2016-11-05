var fs = require('fs');
//创建目录
//fs.mkdirSync('a/b/c/d'); //必须保证上一级存在，在创建下一级
function makep(p) {
    //先创建a 在创建a/b  在创建a/b/c 在创建 a/b/c/d
    var arr = p.split('/');//[a,b,c,d]
    for(var i = 0; i<arr.length;i++){
        var path = arr.slice(0,i+1).join('/');
        if(!fs.existsSync(path)){
            fs.mkdirSync(path);
        }
    }
}
makep('a/b/c/d');
//写一个异步创建文件夹fs.mkdir();递归
//1.fs.mkdir + fs.exists




//创建文件时不能创建已经存在的文件
var flag = fs.existsSync('e');
/*fs.exists('e',function (exists) {
    console.log(exists);
})*/
//console.log(flag);
/*fs.existsSync()
fs.exists()*/
