async function test1() {
  return 'hello Nodejs'
}
console.log(test1()) //async 返回的的Promise对象 Promise { 'hello Nodejs' }

//不使用await时，再外部获取Promise对象返回值的方式 then and catch
test1().then(res => console.log(res)).catch(err => console.log(err))

// 使用await
async function getTest1() {
  const data = await test1()  //await 获取异步方法里的返回值 使用await时 必须时异步方法
  console.log(data)
}
getTest1()
//-------------------------------------------------------//

function test2() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      const name = 'Daniel'
      resolve(name)
    },1000)
  })
}

async function getTest2() {
  const data = await test2()  //await 获取异步方法里的返回值 使用await时 必须时异步方法
  console.log(data)
}
getTest2()