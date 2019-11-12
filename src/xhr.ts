import { AxiosRequestConfig,AxiosResponse} from "./types";
import { parseHeaders } from './helpers/headers'


export default function xhr(config:AxiosRequestConfig){
  return new Promise((resolve,reject)=>{
    const {data=null,url,method='get',timeout,responseType}=config
    const request=new XMLHttpRequest()
    // 超时操作
    if(timeout){
      request.timeout=timeout
    }
    request.ontimeout=function handleTimeout(){
      reject(new Error(`Timeout of ${timeout} ms exceeded`))
    }
    request.open(method.toUpperCase(),url,true)
    request.send(data)

    request.onreadystatechange=function handleLoad(){
      if(request.readyState!==4){
        return
      }
      if(request.status===0){
        return
      }
      const responseHeaders=parseHeaders(request.getAllResponseHeaders())
     // 根据传入的 responseType 来决定返回的数据
     const responseData = responseType === 'text' ? request.responseText : request.response
    //  定义返回的数据类型
     const response:AxiosResponse={
       data:responseData,
       status:request.status,
       statusText:request.statusText,
       herders:responseHeaders,
       config,
       require
     }
     handleResponse(response)
    }
    // 处理非200报错信息
    function handleResponse(response:AxiosResponse){
      if(response.status>=200&&response.status<300){
        resolve(response)
      }else{
        reject(new Error(`Request failed with status code ${response.status}`))
      }
    
    }
    })
  
}

