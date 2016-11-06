var fs = require('fs');
var ws = fs.createWriteStream('./name1.txt',{highWaterMark:5});
//写10个数，每次要保证写入1个后，在写入一个
var index = 0;
function w() {
    var flag = true;//默认可以写入
    //最大不能超过10  并且flag不能为false
    while (flag&&index<10){
        flag = ws.write(''+index++);
    }
}
w();
ws.on('drain',function () { //如果肚子没吃满，消化后也不会触发drain
    console.log('干了');
    w();
});

//写内存相当于一个嘴巴，这个嘴里只能装2个馒头，妈妈碗里有10个，喂到我第二个的时候，告诉他我吃不下了，等我消化后也就是drain方法，告诉他继续喂我吧，









//消化后执行的方法, drain方法，抽干方法
/*ws.write('1');
ws.on('drain',function () {
    console.log('吃饱了继续吧');
    ws.write('2');
    ws.end(); //如果调用了end方法后，就不会在次执行drain方法
});*/
