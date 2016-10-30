//先读文件  读取后在写入文件

function readFile(callback) {
    setTimeout(function () {
        console.log('读完了');//可以写了
        callback();
    },2000);
}
function writeFile() {
    console.log('写入');
}
readFile(writeFile); //当一个代码执行完后在操作的函数

// 五个人吃一碗饭


