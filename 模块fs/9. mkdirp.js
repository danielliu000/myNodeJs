const mkdirp = require('mkdirp')

mkdirp('./模块fs/upload2').then(made =>
    console.log(`made directories, starting with ${made}`))