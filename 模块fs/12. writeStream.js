fs = require('fs')
let str = ''
for(let i = 0; i < 1500; i++) {
  str += `我是从数据库获取的数据，需要保存[${i}]\n `
}

let writeStream = fs.createWriteStream('./output.txt')
writeStream.write(str)

//标记写入完成
writeStream.end()

writeStream.on('finish',() => {
  console.log('写入完成')
})