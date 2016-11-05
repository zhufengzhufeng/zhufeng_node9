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
var buffer = new Buffer(12);
var buf1 = new Buffer('珠峰培');
var buf2 = new Buffer('训');
//targetBuffer,目标buffer
//targetStart,目标的开始
//sourceStart,原的开始
//sourceEnd 原的结束
buf1.copy(buffer,0);
buf2.copy(buffer,9);
console.log(buffer.toString()); //copy方法将多个小buffer写入到大buffer上
//3. concat方法 拼接方法
//将多个buffer拼成一个大buffer
var buf1 = new Buffer('珠峰培');
var buf2 = new Buffer('训');
var buf3 = new Buffer('node');
var newBuffer = Buffer.concat([buf1,buf2],40);
console.log(newBuffer.toString());
//我们要自己写一个myConcat方法，判断是否传入长度,长度过大，留取有效长度
//slice方法,copy方法
Buffer.myConcat = function (list, totalLength) {
    //获取buf1和buf2 将两个buffer粘贴到大buffer（根据长度构建buffer）
    //截取有效的buffer返回
    //先判断是否传递 totalLength
    if(typeof totalLength == 'undefined' ){ //没有传递长度
        totalLength = 0;
        list.forEach(function (buf) {
            totalLength += buf.length; //计算出总长度
        });
    }
    //通过长度来构建一个大buffer
    var buffer = new Buffer(totalLength);
    //目的是将每一个小buffer copy到大buffer上
    var index = 0;
    list.forEach(function (buf) {
        buf.copy(buffer,index);//每次写的时候要维护一个索引
        index += buf.length; //每次写入一个buffer后，就将长度向上增加写入buffer的长度
    });
    return buffer.slice(0,index);//返回最终的结果
};
console.log(Buffer.myConcat([buf1,buf2,buf3]).toString());

//4. isBuffer()
console.log(Buffer.isBuffer([1,2,3]));

