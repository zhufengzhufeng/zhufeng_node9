//1.通过数字的方式来创建buffer
var buffer = new Buffer(4);
//将buffer写成固定的内容
buffer.fill(0);
console.log(buffer);
//2.通过数组的方式创建buffer
var buffer = new Buffer([1,2,3]); //ff   255
//最大是255超过255 则对256取模 负的加256 不识别为0
console.log(buffer);
//3. 字符串创建
var buffer = new Buffer('珠','utf8');//一个汉字多少个字节，在utf8中为一个汉字三个字节
console.log(buffer);

//buffer和字符串的区别
//字符串具有不变性
var str = '珠峰';
str[0] = '培';
console.log(str);
var buffer = new Buffer('珠峰');
console.log(buffer.length);
//字符串默认为字符串的长度，buffer为字节的长度
//buffer和数组的区别 和数组都有一个slice方法
var a = [100];
var arr = [a,2,3];
var newArr = arr.slice(0);
a[0] = 200;
console.log(newArr); //数组存储的是地址，slice后仍然是地址
//buffer截取方法仍然操作的是原buffer
var buffer = new Buffer([1,2,3]);
var newBuffer = buffer.slice(0,1);
newBuffer[0] = 100;
console.log(buffer);  //100，2，3  6+4  100 = 16*6+4

// 1.buffer中的第一个方法write
var buffer = new Buffer(12);
//珠峰 培训
//string,当前写入的字符串
//offset, 偏移量
//length, 写入的长度
//encoding 编码格式
buffer.write('珠峰',0);//默认写入长度为内容长度,编码格式utf8
buffer.write('培训',6,6,'utf8'); //数组里的方法包前不包后 arr.slice(0,1)
console.log(buffer.toString()); //将buffer转化为字符串
//2. copy方法 将n个小buffer粘贴到buffer上
var buffer = new Buffer(6);
var buf1 = new Buffer('珠');
var buf2 = new Buffer('峰');
//targetBuffer,目标buffer
//targetStart,目标的开始
//sourceStart,源的开始
//sourceEnd 源的结束
buf1.copy(buffer);
console.log(buffer.toString());


