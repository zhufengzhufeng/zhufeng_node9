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
    one.g = callback;//在one函数上挂载了g的自定义属性
    this.on(eventName,one);//此时绑定的是one函数，无法移除掉
    //this.removeListener(eventName,callback);
};
EventEmitter.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
};
EventEmitter.prototype.removeListener = function (eventName,callback) {
    this._events[eventName] = this._events[eventName].filter(function (item) {
        return item!=callback&&item.g!=callback;
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
//调用once函数，内部绑定的是one方法，one方法中装的是eat函数执行，因为once方法只执行一次，执行后要销毁掉，在次emit,无法在次执行one方法，在执行完eat函数后将one方法在数组中移除掉
event.removeListener('饿了',eat);
event.emit('饿了','我');