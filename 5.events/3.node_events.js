//node给我们提供了一个自带的事件模块(核心模块)
var EventEmitter = require('events');
var event = new EventEmitter();
function eat(who) {
    console.log(who+'饿了');
}
function drink(who) {
    console.log(who+'喝水');
}
event.once('饿了',eat);
//event.removeListener('饿了',eat);
//event.removeAllListeners('饿了');//移除所有事件
event.emit('饿了','我');
event.emit('饿了','我');
//1.事件绑定 on
//2.绑定一次 once
//3.触发事件 emit
//4.移除事件 removeListener
//5.移除所有removeAllListener
//注释:node最大的绑定数目默认是10个超出会有异常