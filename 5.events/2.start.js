function EventEmitter() {
    this._events = {}; //构建一对多的关系
}
// {'饿了':['callback','callback']}
EventEmitter.prototype.once = function (eventName,callback) {
    //eventName 饿了  callback吃饭
    //执行emit的时候触发callback ，执行后将callback移除掉
    function one() { //绑定的函数为one函数，执行one函数后将one函数移除掉
        callback.apply(this,arguments); //one方法里接受到了‘我’的这个参数
        this.removeListener(eventName,one);
    }
    this.on(eventName,one);
    //this.removeListener(eventName,callback);
}
EventEmitter.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
};
EventEmitter.prototype.removeListener = function (eventName,callback) {
    this._events[eventName] = this._events[eventName].filter(function (item) {
        return item!=callback;
    })
};
EventEmitter.prototype.emit = function (eventName) {
    var args = [].slice.call(arguments,1);
    var that =this;
    this._events[eventName].forEach(function (item) {
        item.apply(that,args);
    })
};
var event = new EventEmitter;
function eat(who) {
    console.log(who+'吃饭');
}
event.once('饿了',eat);
event.removeListener('饿了',eat);
event.emit('饿了','我');
event.emit('饿了','我');