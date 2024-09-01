import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

interface CustomAxiosInstance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>
  (url: string, config?: AxiosRequestConfig): Promise<any>
}

const apiKey = 'dOlftMUcqb5YZ2YRPlWU2tWRqxGL-8_U8bHUWLvvNKA'

const service: CustomAxiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
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
