const url = require('url')
const path = require('path')
const fs = require('fs')

function changeRes(res, mime='text/html') {
  res.send = data => {
    res.setHeader('Content-Type', ''+mime+'; charset=utf-8')
    res.end(data)
  }
}


function getFileMimeSync(extname) {
  try {
    let data = fs.readFileSync('./data/mime.json')
    let mimeObj = JSON.parse(data.toString())
    return mimeObj[extname]
  } catch (e) {
    console.log(e)
  }
}

function initStatic(req, res, staticPath) {
  let pathName = url.parse(req.url).pathname
  pathName = pathName === '/' ? '/index.html' : pathName
  let extName = path.extname(pathName)
  try {
    let data = fs.readFileSync('./' + staticPath + pathName)

    if (data) {
      let mime = getFileMimeSync(extName)
      res.setHeader('Content-Type', ''+mime+'; charset=utf-8')
      res.end(data)
    }
  } catch (e) {

  }
}

const server = () => {
  const G = {
    _get: {},
    _post: {},
    staticPath: ''//静态web目录
  }

  let app = function (req, res) {
    //扩展res 方法
    changeRes(res)
    initStatic(req, res, G.staticPath)

    let pathName = url.parse(req.url).pathname
    let method = req.method.toLowerCase()
    if (G['_' + method][pathName]) {
      if (method === 'get') {
        G['_' + method][pathName](req, res)
      } else if (method === 'post') {
        //获取post数据，绑定到req.body
        let postData = ''
        req.on('data', chunk => {
          console.log(chunk);
          postData += chunk
        })
        req.on('end', () => {
          req.postData = postData
          G['_' + method][pathName](req, res)

        })
      }
    } else {
      // res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end('404 not found')
    }
  }
  app.get = function (str, cb) {
    G._get[str] = cb
  }
  app.post = function (str, cb) {
    G._post[str] = cb
  }
  return app

}

module.exports = server()
