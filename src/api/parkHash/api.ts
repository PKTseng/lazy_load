import service from '@/utils/request'

export const getParkHashAPI = (params: { limit: number }) => {
  return service.get('/api/explore/v2.1/catalog/datasets/100088/records', { params })
}
