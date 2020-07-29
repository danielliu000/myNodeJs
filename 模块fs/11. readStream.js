const fs = require('fs')

const fsReadStream = fs.createReadStream('./largeFile.txt')

let count = 0
let str = ''
//监听数据读取
fsReadStream.on('data', data => {
  str += data
  count++
})
 // 流读取时一点点读的 这里打印次数
fsReadStream.on('end', () => {
  console.log(count)
  console.log(str);
})

fsReadStream.on('error' ,err => {
  console.log(err)
})