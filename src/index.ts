import { AxiosRequestConfig, Method } from './types/index';
import xhr from './xhr';

function axios(config:AxiosRequestConfig){
  xhr(config)
}
export default axios