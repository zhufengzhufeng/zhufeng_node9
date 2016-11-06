var fs  = require('fs');

//会判断一些文件的状态，文件是否有更新（是否修改过）,文件的出生时间，文件的访问的时间
//文件的状态
var stat = fs.statSync('./5.dir.js');
console.log(stat);
/*
atime: 2016-11-05T10:04:52.232Z, access time 访问的时间
mtime: 2016-11-05T10:04:52.233Z, modify time 修改的时间
ctime: 2016-11-05T10:04:52.239Z, change time 修改的时间
modify 更改过但是但是不一定有修改
change 内容一定要发生变化
birthtime: 2016-11-05T09:48:23.053Z birth time 出生时间
*/
//stat可以判断当前路径是文件 还是文件夹
var stat = fs.statSync('./5.dir.js')
console.log(stat.isFile()); //是文件
console.log(stat.isDirectory()); //是文件夹

// fs.writeFile  fs.writeFileSync
// fs.readFile  fs.readFileSync
// fs.appendFile fs.appendFileSync
// fs.mkdir fs.mkdirSync
// fs.exists fs.existsSync
// fs.stat fs.statSync
// isFile  isDirectory