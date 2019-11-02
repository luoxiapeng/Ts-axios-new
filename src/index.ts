import { AxiosRequestConfig, Method } from './types/index';
import xhr from './xhr';
import { buildURL } from './helpers/url';

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
}
function transformUrl(config:AxiosRequestConfig):string{
 const {url,params}=config
 return buildURL(url,params)
}
// ----------URL处理结束-------------
export default axios