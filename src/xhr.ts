import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { parseHeaders } from './helpers/headers'
import { createError } from './helpers/error'

export default function xhr(config: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    const {
      data = null,
      url,
      method = 'get',
      headers,
      timeout,
      responseType,
      withCredentials
    } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)
    configureRequest()
    addEvents()
    request.send(data)

    function configureRequest(): void {
      if (responseType) {
        request.responseType = responseType
      }
      if (timeout) {
        request.timeout = timeout
      }
      if (withCredentials) {
        request.withCredentials = withCredentials
      }
    }
    function addEvents(): void {
      request.onreadystatechange = () => {
        if (request.readyState !== 4) {
          return
        }
        if (request.status === 0) {
          return
        }
        const responseHeaders = parseHeaders(request.getAllResponseHeaders())

        // 根据传入的 responseType 来决定返回的数据
        const responseData = responseType === 'text' ? request.responseText : request.response

        const response: AxiosResponse = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        }

        handleResponse(response)
      }
      request.onerror = () => {
        reject(createError('Network Error', config, null, request))
      }

      request.ontimeout = () => {
        reject(createError(`Timeout of ${timeout}ms exceef`, config, 'ECONABORTED', request))
      }

      // 处理非200报错信息
      function handleResponse(response: AxiosResponse) {
        if (response.status >= 200 && response.status < 300) {
          resolve(response)
        } else {
          reject(
            createError(
              `Request failed with status code ${response.status}`,
              config,
              null,
              request,
              response
            )
          )
        }
      }
    }
  })
}

