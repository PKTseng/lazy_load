import axios from 'axios'

const service = axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 5000
})

service.interceptors.request.use((config) => {
  console.log(config)
  return config
})

service.interceptors.response.use((response) => {
  console.log(response)
  return response
})

export default service
