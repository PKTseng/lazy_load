import { ref } from 'vue'
import { getImageAPI, getParkHashAPI } from '.'

export const useImg = () => {
  const imageInfoList = ref<any>([])

  const getImageList = async (count: number) => {
    try {
      const data = await getImageAPI({ count })

      imageInfoList.value = data
    } catch (error) {
      console.log(error)
    }
  }

  return { imageInfoList, getImageList }
}

export const useParkHash = () => {
  const parkList = ref<any>([])

  const getParkHashList = async (limit: number) => {
    try {
      const data = await getParkHashAPI({ limit })

      parkList.value = data
    } catch (error) {
      console.log(error)
    }
  }

  return { parkList, getParkHashList }
}
