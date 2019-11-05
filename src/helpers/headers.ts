import {isPlainObject} from './util'
 

function normalizaHeaderName (headers:any,normalizedName:string):void{
  if(!headers){
    return 
  }
  // headers: {
  //   'content-type': 'application/json;charset=utf-8'
  // },
  Object.keys(headers).forEach(name=>{
    if(name!==normalizedName&&name.toUpperCase()===normalizedName.toUpperCase()) {
      headers[normalizedName]=headers[name]
      delete headers[name]
    }
  })
}
// 默认添加
export function processHeaders(headers:any,data:any):any{
  // 判断是否为对象
  normalizaHeaderName(headers,'Content-Type')
  if(isPlainObject(data)){
    if(headers&&!headers['Content-Type']){
      headers['Content-Type']='application/json;charset=utf-8'
    }
  }
  return headers
}