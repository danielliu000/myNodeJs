//文件操作需要引入fs模块， fs => file-system
let fs = require('fs')
fs.readFile('./file.txt',(error, data) => {
 return error ?
  console.log(error) :
  console.log(data.toString());  //data为十六进制数，需要toString()方法转换字符串

})