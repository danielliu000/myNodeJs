//引入MongoDB
const {MongoClient} = require('mongodb')

//定义数据库链接地址
const url = 'mongodb://admin:123123@127.0.0.1:27017'

//定义要操作的数据库
const dbName = 'itying'
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true})

//建立链接
client.connect(err => {
  if (err) {
    return console.log(err)
  }
  console.log('链接数据库成功')
  let db = client.db(dbName)
  //查找数据
  // db.collection('user').find({"age":35}).toArray((err,data) => {
  //   console.log(data)
  //   client.close()
  // })
  //增加数据
  // db.collection('user').insertOne({'username':'Daniel','age': 36},(err, result) => {
  //   if(err) {
  //     return console.log(err)
  //   }
  //   console.log('插入成功')
  //   console.log(result.insertedId)
  //   client.close()
  // })
  //修改数据
  db.collection('user').updateOne({'username':'Daniel'}, {$set: {'age':8}}, (err, result) => {
    if(err) {
      return console.log('修改失败');
    }
    console.log(result);
    client.close()
  })
  //删除数据
  // db.collection('user').deleteOne({'username':'Daniel'},(err, result) => {
  //   if(err) {
  //     return console.log(err)
  //   }
  //   console.log(result)
  //   client.close()
  // })
  db.collection('user').deleteMany({'username':'Daniel'},(err, result) => {
    if(err) {
      return console.log(err)
    }
    console.log(result)
    client.close()
  })

})

