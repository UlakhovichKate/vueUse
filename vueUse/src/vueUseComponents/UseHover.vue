<script setup lang="ts">
import { ref } from 'vue'
import { useElementHover } from '@vueuse/core'

const el = ref<HTMLButtonElement>()
const isHovered = useElementHover(el, { delayEnter: 200, delayLeave: 600 })
</script>

<template>
  <h2>Use Hover</h2>
  <button class="btn btn-primary" ref="el">
    <span>{{ isHovered ? 'Thank you!' : 'Hover me' }}</span>
  </button>
</template>
