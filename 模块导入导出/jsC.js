const jsD = require('./jsD')

console.log(jsD);  //module.exports暴露出来的方法 jsD就是暴露的对象obj 而不再是其属性
jsD.get()
console.log(jsD.set('abc'));