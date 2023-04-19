// 引入mockjs
var Mock = require('mockjs')
var data = Mock.mock({
  // 属性 list 的值是一个数组，随机产生 1 到 10 个元素，也可以固定产生几条数据
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id': '@increment',
    'name': '@cname',
    'phone': /^1[0-9]{10}$/,
    'email': '@email',
    'address': '@county(true)',
    'birthday': '@date("yyyy-MM-dd")',
    'status':1
  }]
})
// 将对象转换成JSON格式字符串进行打印
console.log(JSON.stringify(data))
