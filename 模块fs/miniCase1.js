//1. 判断服务器上面有没有upload目录,如果没有则创建,有则什么都不做
//不使用mkdirp方案：
const fs = require('fs')
const sd = require('silly-datetime')
const uploadPath = './模块fs/upload'

fs.stat(uploadPath, (err, data) => {
  err ?
      (logErr(err), mkdirUpload()) :
      //检测是否为文件夹
      !data.isDirectory() ?
          convert() :
          console.log('upload文件夹已存在')
})

function convert() {
  fs.unlink(uploadPath, err => {
     err ? logErr(err) : (console.log('移除upload文件'), mkdirUpload())
  })
}

function logErr(error) {
  const logPath = './模块fs/log.txt'
  let errMsg = `${sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')}: ${error}\n`

  fs.appendFile(logPath, errMsg + '\n', err => {
    err ? logErr(err) : null
  })
}

function mkdirUpload() {
  fs.mkdir(uploadPath, err => {
    err ? logErr(err) : console.log('创建成功')
  })
}




