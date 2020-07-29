let http = require('http')

let server = http.createServer()

server.on('request', (req, res) => {
  //服务器默认以utf-8编码发送请求
  //默认浏览器会用系统默认编码方式解码 中文系统默认是gbk  所以默认情况会造成乱码
  //解决方式： 在Header中 添加Content-type 告知浏览器编码方式
  if (req.url === '/plain') {
    res.setHeader('Content-type', 'text/plain; charset=utf-8')
    res.end('服务器响应请求')

  } else if (req.url === '/html') {

    res.setHeader('Content-type', 'text/html; charset=utf-8')
    res.end('<h1>服务器响应了请求</h1>')
  }
})

server.listen(3000, () => {
  console.log(`服务器启动成功，通过 http://127.0.0.1:3000 来访问`);
})