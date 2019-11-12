export interface AxiosRequestConfig{
  url:string,
  method?:Method,
  data?:any,
  params?:any,
  headers?:any,
  timeout?: number,
  responseType:XMLHttpRequestResponseType
}

export type Method='get'|'Get'
| 'delete' | 'Delete'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'

export interface AxiosResponse<T=any>{
  data:T
  status:number,
  statusText:string
  herders:any
  config:AxiosRequestConfig
  require:any
}