const http = require('http')
const url = require('url')
const routes = require('./module/routes')

http.createServer(function (req, res) {
  routes.static(req, res, './WebServerEncap/static')
  let pathName = url.parse(req.url).pathname.slice(1)
  try {
    res.writeHead(200, {'Content-Type': 'text/html; charset="utf-8"'})
    routes[pathName](req,res)
  } catch (e) {
    routes['error'](req,res)
  }

}).listen(8081)

console.log('Server running at http://127.0.0.1:8081/')

