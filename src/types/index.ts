<<<<<<< HEAD
import { AxiosError } from './../helpers/error'
import { AxiosResponse } from './index'
import { transFormRequest } from './../helpers/data'
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  timeout?: number
  responseType?: XMLHttpRequestResponseType
  withCredentials?: boolean
}

export type Method =
  | 'get'
  | 'Get'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise<T = any> extends AxiosResponse<T> {}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null | number
  request?: any
  response?: AxiosResponse
}
=======
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
>>>>>>> 31464eb2190256d8526623f7a95ddcab874eaa5c
