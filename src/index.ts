import { AxiosRequestConfig, Method } from './types/index';
import xhr from './xhr';
import { buildURL } from './helpers/url';
import { transFormRequest } from './helpers/data';


function axios(config:AxiosRequestConfig):void{
  processConfig(config)
  xhr(config)
}
/**
 * 处理URL传递的格式
 * @param config 
 */
function processConfig(config:AxiosRequestConfig):void{
 config.url=transformUrl(config)
//  处理请求数据，转换为json
 config.data=transFormRequestData(config)
}
function transformUrl(config:AxiosRequestConfig):string{
 const {url,params}=config
 return buildURL(url,params)
}
// ----------URL处理结束-------------

// -----------处理返回数据函数---------
function transFormRequestData(config:AxiosRequestConfig):any{
  return transFormRequest(config.data)
}
export default axios