import axios from '../../src/index'
// -----------测试url发送请求------------
// axios({
//   method: 'get',
//   url: '/simple/get',
//   params: {
//     a: 1,
//     b: 2
//   }
// })

// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:['bar','baz']
//   }

// })
// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:{
//       bar:'baz'
//     }
//   }
// })

// const date=new Date()
// axios({
//   method:'get',
//   url:'/Time/get',
//   params:{
//     date
//   }
// })

// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:'@:$'
//   }
// })
// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:'bar',
//     baz:null
//   }
// })
// axios({
//   method:'get',
//   url:'/base/get#hash',
//   params:{
//     foo:'bar'
//   }
// })
// axios({
//   method:'get',
//   url:'/base/get?foo=bar',
//   params:{
//     bar:'baz'
//   }
// })
// ------------------测试data返回的数据（定义接口）------------
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Int32Array([21, 31])

axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})

axios({
  method: 'get',
  url: '/error/get1'
})
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })
