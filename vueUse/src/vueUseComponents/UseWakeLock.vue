<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useWakeLock } from '@vueuse/core'

const wakeLock = reactive(useWakeLock())
const text = computed(() => wakeLock.isActive ? 'OFF' : 'ON')
function onClick() {
  return wakeLock.isActive ? wakeLock.request('screen') : wakeLock.release()
}
</script>

<template>
  <h2>Use Wake Lock</h2>
  <div>
    Is Supported: {{ wakeLock.isSupported }}
  </div>
  <div>
    Is Active: {{ wakeLock.isActive }}
  </div>
  <button class="btn btn-danger" @click="onClick">
    {{ text }}
  </button>
</template>
