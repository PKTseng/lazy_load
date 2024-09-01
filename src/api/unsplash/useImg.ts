import { ref } from 'vue'
import { getImageAPI, getPhotosAPI, type UnsplashPhoto, type UnsplashPhotoArray } from '.'

export const useImg = () => {
  const imageInfoList = ref<UnsplashPhoto[]>([])

  const getImageList = async (count: number) => {
    try {
      const data = await getImageAPI({ count })

      imageInfoList.value = data
    } catch (error) {
      console.log(error)
    }
  }

  const photos = ref<UnsplashPhotoArray>([])
  const getPhotosList = async () => {
    try {
      const data = await getPhotosAPI()
      photos.value = data
    } catch (error) {
      console.log(error)
    }
  }

  return { imageInfoList, getPhotosList, photos, getImageList }
}
