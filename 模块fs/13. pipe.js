//pipe管道流 复制大文件

const fs = require('fs')
const readStream = fs.createReadStream('./output.txt')
const writeStream = fs.createWriteStream('./模块fs/output.txt')

readStream.pipe(writeStream)