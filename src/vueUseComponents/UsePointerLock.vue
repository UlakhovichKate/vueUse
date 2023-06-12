<script setup>
import { ref, watch } from 'vue'
import { useMouse, usePointerLock } from '@vueuse/core'

const { lock, unlock, element } = usePointerLock()
//const { isSupported, lock, unlock, element, triggerElement } = usePointerLock()
const { x, y } = useMouse({ type: 'movement' })
const rotY = ref(-45)
const rotX = ref(0)

watch([x, y], ([x, y]) => {
  if (!element.value)
    return
  rotY.value += x / 2
  rotX.value -= y / 2
})
</script>

<template>
  <h2>Use Pointer Lock</h2>
  <div>
    {{ rotX }} - {{ rotY }}
  </div>
  <div @mousedown.capture="lock" @mouseup="unlock" class="w-50">
    <img src="../assets/logo.svg" alt="logo" class="image">
  </div>
</template>

<style scoped>
  .image {
    --rotY: v-bind(rotY);
    --rotX: v-bind(rotX);
    transform: rotateY(calc(var(--rotY) * 1deg)) rotateX(calc(var(--rotX) * 1deg));
  }
</style>
