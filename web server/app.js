const http = require('http')
const dirName = './web server/static'
const fs = require('fs')
const url = require('url')
const path = require('path')
const common = require('./module/common')
http.createServer(function (req, res) {
  let pathName = url.parse(req.url).pathname
  pathName = pathName === '/' ? '/index.html' : pathName
  let extName = path.extname(pathName)
  if (pathName !== 'favicon.ico') {

    fs.readFile(dirName + pathName,   async (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain; charset="utf-8"'})
        res.end('404 这个页面不存在')
        return console.log(err)
      }
      // 异步方法
      // let mime = await common.getFileMimeAsync(extName)
      // 同步方法
      let mime = common.getFileMimeSync(extName)
      res.writeHead(200, {'Content-Type': '' + mime + ';charset="utf-8"'})
      res.end(data)
    })
  }
}).listen(8081)

console.log('Server running at http://127.0.0.1:8081/')

