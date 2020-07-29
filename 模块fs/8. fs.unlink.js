const fs = require('fs')

fs.unlink('./模块fs/css/common.css',err => {
  return err ?
      console.log(err) :
      console.log('文件删除成功')
})