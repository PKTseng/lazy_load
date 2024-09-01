import service from '@/utils/request'

export const getImageAPI = (params: { count: number }) => {
  return service.get('photos/random', { params })
}
