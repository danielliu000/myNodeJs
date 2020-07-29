const fs = require('fs')

exports.getMime = function (extname) {

  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'text/html';

  }


}
//异步方法
exports.getFileMimeAsync = function (extname) {
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
exports.getFileMimeSync = function (extname) {
   try {
       let data = fs.readFileSync('./web server/data/mime.json')
       let mimeObj = JSON.parse(data.toString())
       // console.log(mimeObj[extname])
       return mimeObj[extname]
   } catch (e) {
       console.log(e)
   }
}