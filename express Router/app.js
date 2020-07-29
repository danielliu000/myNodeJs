const http = require('http')
const app = require('./routes')
const ejs = require('ejs')
//注册服务
http.createServer(app).listen(8081)

//配置路由

app.get('/', (req, res) => {
  res.send('首页')
})

app.get('/login', (req, res) => {
  ejs.renderFile('./views/form.ejs',{}, (err, data) => {
    res.send(data)
  })

})

app.get('/news', (req, res) => {
 res.send('新闻页面')
})
app.get('/register', (req, res) => {
  res.send('注册页面')
})

app.post('/doLogin', (req, res) => {
    res.send(req.postData)

})
console.log('Server running at http://127.0.0.1:8081/')


db.createUser({
  user:'admin',
  pwd:'123123',
  roles:[{role:'root',db:'admin'}]
})