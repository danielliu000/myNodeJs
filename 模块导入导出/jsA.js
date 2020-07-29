//Node.js是模块作用域 不同JS文件在不同作用域
//需要使用exports导出
//注意如果自定义模块写在node_modules文


let jsB = require('./jsB')  //.js后缀可以省略
// console.log(foo)  //jsB.js中的foo不能直接引用
console.log(jsB.foo); //jsB 就是 jsB.js中的exports对象
let foo = 'fooA'
//导入方法
let res = jsB.add(3,5)
console.log(res);





