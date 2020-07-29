const fs = require('fs')
const url = require('url')
const path = require('path')
const ejs = require('ejs')
//异步方法
function getFileMimeAsync(extname) {
  return new Promise((resolve, reject) => {
    fs.readFile('./web server/data/mime.json', (err, data) => {
      if (err) {
        reject(err)
        return console.log(err)
      }
      let mimeObj = JSON.parse(data.toString())
      // console.log(mimeObj[extname])
      resolve(mimeObj[extname])
    })
  })

}
//同步方法
function getFileMimeSync(extname) {
  try {
    let data = fs.readFileSync('./web server/data/mime.json')
    let mimeObj = JSON.parse(data.toString())
    // console.log(mimeObj[extname])
    return mimeObj[extname]
  } catch (e) {
    console.log(e)
  }
}

exports.static = function (req, res, staticPath) {


}

let app =  {
  static: (req, res, staticPath) => {
    let pathName = url.parse(req.url).pathname
    pathName = pathName === '/' ? '/index.html' : pathName
    let extName = path.extname(pathName)
    if (pathName !== 'favicon.ico') {
      try {
        let data = fs.readFileSync('./' + staticPath + pathName)
        if (data) {
          // 异步方法
          // let mime = await common.getFileMimeAsync(extName)
          // 同步方法
          let mime = getFileMimeSync(extName)
          res.writeHead(200, {'Content-Type': '' + mime + ';charset="utf-8"'})
          res.end(data)
        }
      } catch (e) {

      }
    }
  },
  login: (req, res)=> {
    //处理登录
    let msg = '我是登录页面'
    ejs.renderFile('./WebServerEncap/views/login.ejs', {msg}, (err, data) => {
      res.end(data)
    })
  },
  news: (req, res) => {
    //news
    let newsList = [
      {title: 'news 111'},
      {title: 'news 222'},
      {title: 'news 333'},
      {title: 'news 444'},
      {title: 'news 555'},
    ]
    ejs.renderFile('./WebServerEncap/views/news.ejs', {newsList}, (err, data) => {
      res.end(data)
    })
  },
  register: (req, res) => {
    //news
    let reg = '我是注册页面'
    ejs.renderFile('./WebServerEncap/views/reg.ejs', {reg}, (err, data) => {
      res.end(data)
    })
  },
  error: (req, res) => {
    res.writeHead(404, {'Content-Type': 'text/html; charset="utf-8"'})
    res.end('404 not found')
  }

}


module.exports = app

