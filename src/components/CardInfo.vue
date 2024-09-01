<template>
  <div class="relative overflow-hidden group">
    <img
      :src="image.urls.regular"
      :alt="image.alt_description"
      class="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
    />
    <div
      class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
    >
      <a
        :href="'https://unsplash.com/photos/' + image.id"
        target="_blank"
        class="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
      >
        View on Unsplash
      </a>
    </div>
  </div>

  <div class="p-6">
    <h3 class="font-bold text-xl mb-2 text-gray-800">{{ image.user.name }}</h3>
    <p class="text-gray-600 text-sm mb-4">{{ image.alt_description }}</p>
    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-red-500 mr-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="text-gray-700">{{ image.likes }} likes</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type UnsplashPhoto } from '@/api/unsplash'
defineProps<{
  image: UnsplashPhoto
}>()
</script>

<style lang="scss" scoped></style>
