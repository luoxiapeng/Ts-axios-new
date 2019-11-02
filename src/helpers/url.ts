/**
 * 处理兼容的情况如下
 * 1./base/get?a=1&b=2
 * 2./base/get?foo[]=bar&foo[]=baz'
 * 3./base/get?foo=%7B%22bar%22:%22baz%22%7D
 * 4./base/get?date=2019-04-01T05:55:39.030Z
 * 5./base/get?foo=@:$+
 * 6./base/get?foo=bar
 * 7.
 */
import {isDate,isObject} from './util'
import { type } from 'os'

function encode(val:string):string{
  // 将url的参数进行特殊字符解析
  return encodeURIComponent(val)
    .replace(/%40/g,'@')
    .replace(/%3A/gi,':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url:string,param?:any){
  if(!param){
    return url
  }
  const parts:string[]=[]
  Object.keys(param).forEach((key)=>{
    let val=param[key]
    // /base/get?a=1&b=2
    if(val===null||typeof val==='undefined'){
      return 
    }
    // /base/get?foo[]=bar&foo[]=baz'
    let values:string[]
    if(Array.isArray(val)){
      values=val
      key+='[]'
    }else{
      values=[val]
    }
    // /base/get?date=2019-04-01T05:55:39.030Z
    values.forEach((val)=>{
      if(isDate(val)){
        val=val.toISOString()
      }else if(isObject(val)){
        // /base/get?foo=%7B%22bar%22:%22baz%22%7D
        val=JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })

  })

  let serializedParams=parts.join('&')
  if(serializedParams){
    const markIndex=url.indexOf('#')
    if(markIndex!==-1){
      url=url.slice(0,markIndex)
    }
    url +=(url.indexOf('?')===-1?'?':'&')+serializedParams
  }
  return url

}