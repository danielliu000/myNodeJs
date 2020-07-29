const url = require('url')
const api = 'http://www.daniel.com?name=daniel&age=20'

// console.log(url.parse(api,true))
//query: [Object: null prototype] { name: 'daniel', age: '20' },

const getValue = url.parse(api,true).query //获取get传值

console.log(`姓名: ${getValue.name}\n年龄: ${getValue.age}`)
