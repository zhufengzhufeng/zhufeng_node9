var fs = require('fs');
function copy(source,target) {
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws); //将可读流中的内容，导入到可写流中
}
copy('./name.txt','./name1.txt');