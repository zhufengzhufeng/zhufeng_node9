//进制转换
//任意进制转换成10进制
console.log(parseInt('11111111',2));
//将任意进制转换成任意进制
console.log((0xff).toString(2)); //默认10进制，可以指定转化的进制
console.log((100).toString(16));

//base64 编码格式 不是加密 md5 sha1 sha256
//是将内容转换成可见编码
/*ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
1234567890
+/*/
//将2进制的取值范围限制到64之内 0-63
//00111111  2^6-1 一个汉字由三个字节组成，每个字节减小到64以下，在可见编码下取值即可
console.log(new Buffer('珠'));//e7 8f a0
//1.将16进制转化成2进制
console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));
/*
11100111 10001111 10100000
00111001 00111000 00111110 00100000
在将4个数转换成10进制
*/
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
//57 56 62 32
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
console.log(str[57]+str[56]+str[62]+str[32]); //54+g base64编码
//写一个简单的方法，我输入任意汉字，把他转换出base64编码
function base64(str) {
    var buffer = new Buffer(str);
    //1.先将buffer里的每一个字节全部转换成2进制，拼接到一起
    //'101010 101010 10每6位 分开，前面+ 两个0
    //3.转换成10进制
    //4.去可见编码中取值
    var str1 = "";
    buffer.forEach(function (item) { //item十进制
        str1 += (item).toString(2); //将10进制转换成2进制，累加
    });
    var arr = []; //每6位拆分开
    for (var i=0;i<str1.length/6;i++){
        arr.push(parseInt('00'+str1.slice(i*6,(i+1)*6),2));
    }
    var BASE = "";
    var str2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    arr.forEach(function (item) {
        BASE += str2[item];
    });
    return BASE;
}
console.log(base64('珠峰培训'));





//2.将三个8位的字节变成4个字节6位


