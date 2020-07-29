const fs = require('fs')
/**
 * mkdir 创建目录 接收三个参数
 * 1. path
 * 2. 目录权限 默认777
 * 3. 回调
 *
 */

fs.mkdir('./模块fs/css',err => {
  return err ?
      console.log(err):
      console.log('创建成功')
})