<template>
  <h2>Use Window Scroll</h2>
  <div class="block-scroll">
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
  </div>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll()
</script>

<style>
.block-scroll {
  position: fixed;
  bottom: 100px;
  right: 0;
}
</style>
