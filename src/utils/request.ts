import axios from 'axios'

const apiKey = 'hIDnk7DJLoPAF6xJYYN_kaB4-Q1yG5LofMmeUVjtKsI'

const service = axios.create({
  baseURL: 'https://api.unsplash.com', //  https://data.bs.ch, 要測試停車 API URL
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    config.params = { ...config.params, client_id: apiKey }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use((response) => {
  const { status, data } = response

  if (status >= 200) {
    return data
  } else {
    return Promise.reject(new Error(data))
  }
})

export default service
