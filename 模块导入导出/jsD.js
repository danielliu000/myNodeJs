obj = {
  get: function(){
    console.log('This is a get function')
  },
  set: function(val){
    return val
  }
}
module.exports = obj  //通过module.exports方式暴露