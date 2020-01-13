import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add Authorization header to every request, you can add other custom headers here
    config.headers.Authorization = 'token信息配置'
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    // 拦截操作...
    console.log(response)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
