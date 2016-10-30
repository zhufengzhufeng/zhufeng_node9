function Person() {
    this.meat = 'sweet'
}
// exports.Person = Person;
module.exports = Person;
/*
   (function(require,exports,module,__dirname,__filename){
   //1
         module.exports = exports = {}
         return module.exports
   //2
        module.exports和exports使用的是同一个{}

        return module.exports还是原来的地址
   })
* */
/*var a = b = {};
b.name = 1;
console.log(a);*/
