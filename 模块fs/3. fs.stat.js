const fs = require('fs')

fs.stat('./模块fs/file.txt', (err, data) => {
  return err ?
      console.log(err) :
      (
          console.log('is Dir: ' + data.isDirectory()),
          console.log('is File: ' + data.isFile())
      )

})

