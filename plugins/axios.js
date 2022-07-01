import Apis from '@/API/index'



const baseUrl = "/api/store"

export default function (app, inject) {
  const axios = app.$axios

  // axios.defaults.timeout = 10000
  axios.defaults.baseURL = baseUrl


  const API = {}
  for (const i in Apis) {
    // 待用api时需要传入的参数
    // data为post，params为get
    API[i] = function (data = '', params = '') {
      const { url, method } = { ...Apis[i] }
      return axios({
        url: url + params,
        method,
        data,
        params
      })
    }
  }

  app.app.api = API
  inject('api', API)





  // 携带token
  // axios.onRequest((config) => {
  //   const token = Cookie.get('token')
  //   config.headers.Authorization = token 
  // })

  // 请求回调
  axios.onResponse((response) => {
    // console.log(8888,response.data)
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else if (response.data.code === 401) {
      // Message.error('请登录后再操作');
    } else {
      // Message.error(response.data.msg);
      return Promise.reject(response.data)
    }
  })



  // 错误回调
  axios.onError((error) => {
    console.log(error);
  })


}