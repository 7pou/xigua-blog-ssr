import axios from "axios";
import { HOST, REQUEST_BASE_URL, REQUEST_TIMEOUT } from "../common/config";

/*
 * @Author: zhao - 🍉
 * @Date: 2021-03-30 21:00:53
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2021-12-23 15:09:33
 * @Descripttion: 
 */
const request = axios.create({
  baseURL: HOST + REQUEST_BASE_URL,
  method: 'POST',
  timeout: REQUEST_TIMEOUT
})
request.interceptors.request.use(req => {
  if (req.method === 'get') {
    req.params = req.data
  }
  return req
})
request.interceptors.response.use(res => {
  if (!res) return Promise.reject('请求超时')
  if (res.status !== 200) return Promise.reject('请求失败' + res.status)
  if (res.data.code === 0) {
    return Promise.resolve(res.data)
  } else {
    return Promise.reject(res.data)
  }
})



export default request