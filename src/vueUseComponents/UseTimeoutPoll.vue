<script setup lang="ts">
import { ref } from 'vue'
import { promiseTimeout } from '@vueuse/shared'
import { useTimeoutPoll } from '@vueuse/core'

const count = ref(0)

async function fetchData() {
  await promiseTimeout(1000)
  count.value++
}

const { isActive, pause, resume } = useTimeoutPoll(fetchData, 1000)
</script>

<template>
  <h2>Use Timeout Poll</h2>
  <div>
    <div>Count: {{ count }}</div>
    <div>isActive: {{ isActive }}</div>
    <div>
      <button @click="pause" class="btn btn-outline-danger">
        pause
      </button>
      <button @click="resume" class="btn btn-danger">
        resume
      </button>
    </div>
  </div>
</template>
