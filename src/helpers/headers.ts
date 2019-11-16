import { isPlainObject } from './util'

function normalizaHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  // headers: {
  //   'content-type': 'application/json;charset=utf-8'
  // },
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}
// 默认添加
export function processHeaders(headers: any, data: any): any {
  // 判断是否为对象
  normalizaHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
<<<<<<< HEAD
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach(line => {
    // 字符串可能存在多个 ":" 的情况
    let [key, ...vals] = line.split(':')
    key = key.trim().toLocaleLowerCase()
    if (!key) return
    const val = vals.join(':').trim()
    parsed[key] = val
  })
  return parsed
}
=======

export function parseHeaders(heraders:string):any{
  let parsed=Object.create(null)
  if(!heraders){
    return parsed
  }
  heraders.split('\r\n').forEach(line => {
    let [key,...vals]=line.split(':')
    key=key.trim().toLocaleLowerCase()
    if(!key)return
    const val=vals.join(':').trim()
    parsed[key]=val
    
  })
  return parsed
  

}
>>>>>>> 31464eb2190256d8526623f7a95ddcab874eaa5c
