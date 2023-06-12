<script setup lang="ts">
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const data = ref([1])

useInfiniteScroll(
    el,
    () => {
      const length = data.value.length + 1
      data.value.push(...Array.from({ length: 5 }, (_, i) => length + i))
    },
    { distance: 10 },
)
</script>

<template>
  <h2>Use Infinite Scroll</h2>
  <div ref="el" class="gap-2 p-4 w-50 h-300px overflow-y-scroll bg-light rounded">
    <div v-for="item in data" :key="item" class="h-15 bg-light-subtle rounded p-3">
      {{ item }}
    </div>
  </div>
</template>

<style>
.h-300px {
  height: 300px;
}
</style>
