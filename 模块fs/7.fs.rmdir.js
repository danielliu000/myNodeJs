const fs = require('fs')

fs.rmdir('./模块fs/html', err => {
  return err ?
      console.log(err) :
      console.log('文件夹移动成功')
})