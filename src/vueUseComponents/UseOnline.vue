<script setup lang="ts">
import { computed } from 'vue'
import { useOnline } from '@vueuse/core'

const online = useOnline()

const clazz = computed(() => online.value ? 'text-primary' : 'text-gray')
const text = computed(() => online.value ? 'Online' : 'Offline')
</script>

<template>
  <h2>Use Online</h2>
  <p class="mb-2">
    Disconnect your network to see changes
  </p>
  <div>Status: <b :class="clazz">{{ text }}</b></div>
</template>
