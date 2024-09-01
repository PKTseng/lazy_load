import { type AxiosRequestConfig } from 'axios'
import service from '@/utils/request'
import { type UnsplashPhoto } from '.'

export const getImageAPI = (params: { count: number }): Promise<UnsplashPhoto[]> => {
  return service.get<UnsplashPhoto[], UnsplashPhoto[]>('photos/random', { params })
}

export const getPhotosAPI = (config?: AxiosRequestConfig): Promise<UnsplashPhoto[]> => {
  return service.get<UnsplashPhoto[], UnsplashPhoto[]>('photos', config)
}
