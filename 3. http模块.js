//1. 创建一个web服务器 引入http模块

let http = require('http')

//2. 使用 http.createServer() 创建web服务器
// 返回一个 Server 实例

let server = http.createServer()

//3. 接收请求 => 处理请求 => 发送响应

//注册request 请求事件
// 当客户端请求过来，就会自动触发服务器的request 请求事件，然后执行第二个参数
// 参数： 1. Request  2. Response
server.on('request', (request, response)=> {
  //request
  console.log(`收到客户端请求 路径是${request.url}`);
  console.log(`客户端请求的地址是${request.socket.remoteAddress}:${request.socket.remotePort}`)

  //response 有一个方法write返回响应，可以有多个但要以end结尾 结束响应

  //根据路径给出不同响应 : response.write(xxx)+ response.end() 或直接用 response.end(xxx)
  switch (request.url) {
    case '/':
      response.end('Home Page')
      break
    case '/login':
      // response.write('Login Page')
      response.end('Login Page')
      break
    case '/products':
      // response.write('products Page')
      const products = [
          {
            name: 'Apple',
            price: 15
          },
        {
          name: 'Grape',
          price: 10
        },
        {
          name: 'Orange',
          price: 8
        }
      ]
      response.write('Products Page\n')
      response.end(JSON.stringify(products)) //需要把数组转换成字符串

      break
    case '/profile':
      // response.write('Profile Page')
      response.end('Profile Page')
      break
    default:
       // response.write('404 not found')
      response.end('404 not found')
  }

})

//4. 启动服务器
server.listen(3000, ()=>{
  console.log(`服务器启动成功，通过 http://127.0.0.1:3000 来访问`);
})