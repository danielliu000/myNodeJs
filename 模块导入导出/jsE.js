
//如果自定义模块写在node_modules中 则 直接引用模块文件夹名称即可
//node会自动查找对应模块文件夹下的index.js文件来引入
//类似引入node核心模块  如 require('http')

//如果不使用index.js 则需要在模块文件夹下通过npm init --yes 生成入口配置文件package.json
//package.json 中的main 即入口文件

const reqOne = require('modOne')
const reqTwo = require('modTwo')
reqOne.get()
console.log(reqOne.set('abc'))

reqTwo.get()
console.log(reqTwo.set('abc'))
