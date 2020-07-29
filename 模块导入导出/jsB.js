

let foo = 'fooB'
exports.foo = foo    // 通过exports对象增加foo属性，并将此模块中的变量foo赋值给它 以便其他模块引用
exports.add = (x, y) => x + y



