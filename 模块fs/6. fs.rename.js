//fs.rename  1. 重命名 2. 移动文件
const fs = require('fs')
fs.rename('./模块fs/file.txt','./模块fs/fileNew.txt', err => {
  return err ?
      console.log(err) :
      console.log('重命名成功')
})

//移动文件
fs.rename('./模块fs/common.css','./模块fs/css/common.css', err => {
  return err ?
      console.log(err) :
      console.log('移动成功')
})