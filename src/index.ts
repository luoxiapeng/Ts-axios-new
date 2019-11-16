import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/index'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}
/*
 * 处理URL传递的格式
 * @param config
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)

  config.headers = transforHeaders(config)
  //  处理请求数据，转换为json
  config.data = transFormRequestData(config)
}
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}
// ----------URL处理结束-------------

// -----------处理返回数据函数---------
function transFormRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
// ------------处理返回数据结束----------

// --------------处理header开始-----------
function transforHeaders(config: AxiosRequestConfig) {
  // 给Headers一个默认的对象，这样就可以自动添加utf-8属性
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
export default axios
