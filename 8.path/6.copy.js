//创建一个可读流 和一个可写流
//1.每次读入一次后开始写入 在on data 中调用wirte方法
//2.当文件不能写入时 暂停读取 如果写入返回false 调用pause
//3.等待抽干后再调用恢复方法，恢复读取 在drain方法中调用resume
//4.监听读取后关闭掉写入方法ws.end方法 rs.on('end')方法中调用ws.end
var fs = require('fs');
function copy(source,target) {
    
}
copy('./name.txt','./name1.txt')
