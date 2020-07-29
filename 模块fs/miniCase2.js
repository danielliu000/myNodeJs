//2. wwwroot文件夹下有image css js 以及index.html
//   找出 wwwroot目录下面所有目录,
//   并放入一个数组

//错误思路： 循环wwwroot里的文件或文件夹 》 用fs.stat判断是否是文件夹 》push进一个数组
//由于fs里的方法都是异步的所以以上方式会返回空数组

//解决方案： 1. 改造for循环 使用递归    2. 使用nodejs新特性 async await
const fs = require('fs')


//方案1. 改造for循环 使用递归 代码有点乱
// fs.readdir(path, (err, data) => {
//   if(!err) {
//     (function getDir(i) {
//       if(i === data.length) return console.log(dirArr)
//       fs.stat(path + data[i], (err,stats) => {
//         if(stats.isDirectory()){
//           dirArr.push(data[i])
//         }
//         getDir(i+1)
//       })
//     })(0)
//   }
// })
//方案2. 使用nodejs新特性 async await
function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      err ? reject(err) : stats.isDirectory() ?
          resolve(true) :
          resolve(false)

    })
  })
}

function main() {
  const path = './模块fs/wwwroot/'
  let dirArr = []
  fs.readdir(path, async (err, data) => {
    if(err) {
      return console.log(err)
    }
    for(let i = 0; i < data.length; i++) {
      //使用await  获取isDir返回的Promise对象结果 相当于.then(value)
          await isDir(path + data[i]) ? dirArr.push(data[i]) : null
        }
    console.log(dirArr)

  })
}

main()



