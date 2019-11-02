export interface AxiosRequestConfig{
  url:string,
  method?:Method,
  data?:any,
  params?:any
}

export type Method='get'|'Get'
| 'delete' | 'Delete'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'
