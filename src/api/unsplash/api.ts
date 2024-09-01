import service from '@/utils/request'

export const getImageAPI = (params: { count: number }) => {
  return service.get('photos/random', { params })
}

export const getPhotosAPI = () => {
  return service.get('photos')
}

export const getParkHashAPI = (params: { limit: number }) => {
  return service.get('/api/explore/v2.1/catalog/datasets/100088/records', { params })
}
