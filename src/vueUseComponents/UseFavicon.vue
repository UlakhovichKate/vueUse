<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFavicon } from '@vueuse/core'

const type = ref('vue')

const favicon = computed(() =>
    type.value === 'bmas' ? 'dark.ico' : 'favicon.ico',
)

useFavicon(favicon, {
  baseUrl: '/',
  rel: 'icon',
})
</script>

<template>
  <div>
    Change favicon to
  </div>
  <button @click="type = 'bmas'">
    BMAS
  </button>
  <button @click="type = 'vue'">
    Vue
  </button>
</template>
