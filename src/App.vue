<template>
  <div>
    <h1 class="text-3xl font-bold underline text-red-600">Hello world!</h1>

    <p class="text-3xl font-bold underline text-red-600">{{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style></style>
