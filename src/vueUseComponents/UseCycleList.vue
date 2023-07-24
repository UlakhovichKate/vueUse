<script setup lang="ts">
import { useCycleList } from '@vueuse/core'
import { ref } from 'vue'

const list = ref([
  'Dog',
  'Cat',
  'Lizard',
  'Shark',
  'Whale',
  'Dolphin',
  'Octopus',
  'Seal',
])

const { state, next, prev } = useCycleList(list)
</script>

<template>
  <h2>Use Cycle List</h2>
  <pre>{{ list }}</pre>
  <div>
    <div class="text-primary text-lg font-bold">
      {{ state }}
    </div>
    <button @click="prev()" class="btn btn-secondary">
      Prev
    </button>
    <button @click="next()" class="btn btn-secondary">
      Next
    </button>
  </div>
</template>
