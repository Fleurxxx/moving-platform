Y/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2023-03-19 15:53:44
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2023-04-05 00:35:58
 * @FilePath: \OSS\src\utils\axios.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import qs from 'qs';//转json数据工具包
import { ElMessage } from 'element-plus'
import router from '../router/index'
import { localGet } from './index'
import user from "../store/user";
const userStore = user()


let baseURL = 'http://192.168.50.236:8080/'
// let baseURL = 'http://192.168.50.35:8080/' //后端开发环境地址(部署后端到本机后只需修改此地址)
let config = {
  baseURL: baseURL,
  timeout: 30000    //设置最大请求时间
}
const _axios = axios.create(config);


// 接收请求拦截器，内部根据返回值，重新组装，统一管理。
_axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    ElMessage.error('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code != 200) {
    console.log(res.data);
    if (res.data.msg) ElMessage.error(res.data.msg)
    if (res.data.resultCode == 419) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }
  return res
})

const header = { 
  'Content-Type': 'application/json;charset=UTF-8', 
  'Authorization': 'eyJ0eXBlIjoiSnd0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJjdXJyZW50VGltZSI6MTY4MDM0ODgyNTQ1OCwicGFzc3dvcmQiOiIxIiwiaWQiOiIzIiwiZXhwIjoxNjgwMzQ4ODI1LCJ1c2VybmFtZSI6IjEifQ.HqPFNUcdYXmZ7JAtA9y_cXKFmFh1djEppriXDJUOGa4' 
}

// const header = { 
//   'Content-Type': 'application/json;charset=UTF-8', 
//   'Authorization':localGet("token")
// }


// 封装filePost,post,get,post,delete方法
const http = {
  filePost(url = '', ip = '', port = '') {
    let config2 = {
      baseURL: "http://" + ip + ":" + port + "/",
      timeout: 30000
    }
    const _axios2 = axios.create(config2);
    console.log("Aaa:" + config2.baseURL)
    return new Promise((resolve, reject) => {
      _axios2({
        url,
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        method: 'POST'
      }).then(res => {
        resolve(res.data)
        return res
      }).catch(err => {
        reject(err)
      })
    })
  },
  get(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        params,
        headers: header,
        method: 'GET'
      }).then(res => {
        resolve(res.data)
        return res
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url = '', params = {}) {
    console.log("测试打印post请求携带的params内容", params)
    return new Promise((resolve, reject) => {
      _axios({
        url,
        data: qs.parse(params),
        headers: header,
        method: 'POST'
      }).then(res => {
        resolve(res.data)
        return res.data
      }).catch(error => {
        reject(error)
      })
    })
  },
  put(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        data: qs.parse(params),
        headers: header,
        method: 'PUT'
      }).then(res => {
        resolve(res.data)
        return res.data
      }).catch(error => {
        reject(error)
      })
    })
  },
  delete(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        data: qs.parse(params),
        headers: header,
        method: 'DELETE'
      }).then(res => {
        resolve(res.data)
        return res.data
      }).catch(error => {
        reject(error)
      })
    })
  }
}
export default http