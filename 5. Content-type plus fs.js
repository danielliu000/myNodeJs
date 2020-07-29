const fs = require('fs')
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  const url = req.url
  console.log(`收到客户端请求 路径是${url}`)
  console.log(`客户端请求的地址是${req.socket.remoteAddress}:${req.socket.remotePort}`)
  switch (url) {
    case '/':
      res.setHeader('Content-type', 'text/html; charset=utf-8')
      fs.readFile('./static/index.html', (err, data) => {
        return err ? console.log(err) : res.end(data)
      })
      break
    case '/solar':
      res.setHeader('Content-type', 'image/jpeg')
      fs.readFile('static/images/solarSystem.jpg', (err, data) => {
        return err ? console.log(err) : res.end(data)
      })
      break
    default:
      res.end('404 not found')
  }
})
server.listen(3000, () => {
  console.log(`服务器启动成功，通过 http://127.0.0.1:3000 来访问`)
})
