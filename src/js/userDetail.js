// import Mock from 'mockjs' // 引入mock方式一
let Mock = require('mockjs') // 引入mock方式二

var dataList = []
for (var i = 0; i < 53; i++) {
  dataList.push(Mock.mock({
    'id': '@increment',
    'name': '@cname',
    'phone': /^1[0-9]{10}$/,
    'email': '@email',
    'address': '@county(true)',
    'createTime': '@date("yyyy-MM-dd")'
  }))
}
Mock.mock(new RegExp('/user/detail'), 'post', (opts) => {
  var list = dataList;
  var currentPage = JSON.parse(opts.body).currentPage;
  var pageSize = JSON.parse(opts.body).pageSize;
  var totals = list.length;
  list = pagination(currentPage, pageSize, list)
  return {
    'totals': totals,
    'data': list
  }
})

function pagination(currentPage, pageSize, list) {
  return list.slice((currentPage - 1) * pageSize, currentPage * pageSize)
}


