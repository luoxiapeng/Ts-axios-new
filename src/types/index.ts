export interface AxiosRequestConfig{
  url:string,
  method?:Method,
  data?:string,
  params?:string
}

export type Method='get'|'Get'
| 'delete' | 'Delete'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'
