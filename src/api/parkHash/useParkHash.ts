import { ref } from 'vue'
import { getParkHashAPI } from '.'

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
