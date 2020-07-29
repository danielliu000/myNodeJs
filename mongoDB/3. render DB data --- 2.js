const http = require('http')
const app = require('./moudle/routes')
const ejs = require('ejs')
const {MongoClient} = require('mongodb')

//定义数据库链接地址
const url = 'mongodb://admin:123123@127.0.0.1:27017'

//定义要操作的数据库
const dbName = 'itying'
// const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})


//注册web服务

http.createServer(app).listen('3000', () => {
  console.log('server running at http://127.0.0.1:3000')
})
app.get('/', (req, res) => {
  //直接使用MongoClient链接数据库, 在回调中使用client 即每次请求创建一个新的client
  MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
    if (err) {
      return console.log(err)
    }
    console.log('链接数据库成功')
    let db = client.db(dbName)
    db.collection('user').find({}).toArray((err, result) => {
      if (err) return console.log(err)
      client.close()
      ejs.renderFile('./views/index.ejs', {list: result}, (err, data) => {
        if (err) return console.log(err)
        res.send(data)
      })
    })
  })
})