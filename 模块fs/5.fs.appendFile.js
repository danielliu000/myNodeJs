//appendFile 创建或追加文件内容
const content = '我是被保存的数据'

const fs = require('fs')
for(let i = 0; i<1000 ; i++) {
  fs.appendFile('./largeFile.txt',`${content}[${i}]\n`, error => {
    return error ?
        console.log(error) : null
    // console.log('文件写入成功')
  })
}