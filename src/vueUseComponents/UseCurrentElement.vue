<script setup lang="ts">
import { useCurrentElement } from '@vueuse/core'
import { watchEffect } from 'vue'

const el = useCurrentElement()

watchEffect(() => {
  console.log('Current element:', el.value)
})
</script>

<template>
  <h2>Use Current Element <span>(Open your console.log to see the element)</span></h2>
</template>
