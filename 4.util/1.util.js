// util是node自带的核心包，不需要安装直接require即可
var util = require('util');

//1.继承的方法
//util.inherits()
//2.原型继承
function Parent() {
    this.meat = 'sweet';
}
Parent.prototype.handsome = function () {
    console.log('很帅');
}
function Child() {}
//Child.prototype = new Parent();
//原型链继承
//Child.prototype.__proto__ = Parent.prototype;
//Child.prototype = Object.create(Parent.prototype);
/*Object.setPrototypeOf = function (cprop,superprop) {
    cprop.__proto__ = superprop;
    return {};
};*/
//Object.setPrototypeOf(Child.prototype,Parent.prototype);
//util.inherits(Child,Parent); //子类继承父类的原型上的方法
var child = new Child();


//util.inspect解析方法 console.dir默认调用的方法
var school = {name:'zfpx',value:{value:1}};
//定义不可枚举的属性
Object.defineProperty(school,'age',{ //给对象定义属性
    enumerable:false, //是否可枚举
    value:8, //属性的值
    writable:false,//是否可写(改变值)
    configurable:true //是否可配置(删除)
});
console.log(school);
/* legacy: obj, showHidden 显示隐藏属性, depth 深度, colors 颜色*/
console.log(util.inspect(school,{showHidden:true,depth:1,colors:true}));
// 检测数据类型
util.isArray([]);
util.isBoolean([]);
util.isDate(new Date());
