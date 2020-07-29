const fs = require('fs')
const content = '我是被保存的数据\n'

/**
 * fs.writeFile 接收参数：
 * filename （string) 文件名称
 * data (string | Buffer) 将要写入的内容，可以使字符串或buffer数据
 * option (Object)  option数组对象，包括：
 * . encoding(string) 可选 默认’utf8'当data为buffer时
 * . mode  (Number) 文件读写权限 默认 438
 * . flag (String) 默认值 'w'
 *
 * callback {Function} 回调, 传递一个异常参数err
 *
 */
for(let i = 0; i<6 ; i++) {   //writeFile会替代原有文件
  fs.writeFile('./largeFile.txt',content, error => {
    return error ?
        console.log(error) : null
        // console.log('文件写入成功')
  })
}
