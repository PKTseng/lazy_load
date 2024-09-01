<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Basel Parking List</h1>
    <div class="overflow-x-auto bg-white shadow-md rounded-lg">
      <table class="min-w-full table-auto">
        <thead class="bg-gray-100">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Free Spaces
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total Spaces
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Occupancy
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="park in parkList.results" :key="park.id2" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {{ park.name }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ park.free }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ park.total }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <div class="flex items-center">
                <div class="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded-full"
                    :style="{ width: `${park.auslastung_prozent}%` }"
                  ></div>
                </div>
                <span>{{ park.auslastung_prozent?.toFixed(2) }}%</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useParkHash } from '@/api/parkHash'

const { parkList, getParkHashList } = useParkHash()

await getParkHashList(20)
</script>

<style scoped></style>
