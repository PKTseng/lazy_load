<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-purple-100 to-pink-100"
  >
    <div
      v-for="image in imageInfoList"
      :key="image.id"
      class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <CardInfo :image="image" />
    </div>
  </div>

  <!-- 第二區塊 -->
  <div
    ref="photosRef"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-purple-100 to-pink-100"
  >
    <div
      v-for="image in photos"
      :key="image.id"
      class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <CardInfo :image="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useImg } from '@/api/unsplash'
import CardInfo from '@/components/CardInfo.vue'

const { imageInfoList, getImageList, photos, getPhotosList } = useImg()

await getImageList(20)

const photosRef = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  photosRef,
  async ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
    if (isIntersecting) {
      console.log('GET API')
      await getPhotosList()
      stop() //停止監聽
    } else {
      console.log('STOP API')
    }
  }
)
</script>

<style scoped></style>
