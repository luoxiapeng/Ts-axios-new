import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})

axios({
  method:'get',
  url:'/base/get',
  params:{
    foo:['bar','baz']
  }

})
axios({
  method:'get',
  url:'/base/get',
  params:{
    foo:{
      bar:'baz'
    }
  }
})

const date=new Date()
axios({
  method:'get',
  url:'/Time/get',
  params:{
    date
  }
})

axios({
  method:'get',
  url:'/base/get',
  params:{
    foo:'@:$'
  }
})
axios({
  method:'get',
  url:'/base/get',
  params:{
    foo:'bar',
    baz:null
  }
})
axios({
  method:'get',
  url:'/base/get#hash',
  params:{
    foo:'bar'
  }
})
axios({
  method:'get',
  url:'/base/get?foo=bar',
  params:{
    bar:'baz'
  }
})