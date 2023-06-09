<script setup lang="ts">
import { ref } from 'vue'
import { onLongPress } from '@vueuse/core'

const htmlRefHook = ref<HTMLElement | null>(null)
const longPressedHook = ref(false)

const onLongPressCallbackHook = (e: PointerEvent) => {
  longPressedHook.value = true
}
const resetHook = () => {
  longPressedHook.value = false
}

onLongPress(
    htmlRefHook,
    onLongPressCallbackHook,
    { modifiers: { prevent: true } }
)
</script>

<template>
  <h2>On Long Press</h2>
  <p>Long Pressed: {{ longPressedHook }}</p>

  <button ref="htmlRefHook" class="ml-2 btn btn-primary small">
    Press long
  </button>

  <button class="ml-2 btn btn-outline-primary small" @click="resetHook">
    Reset
  </button>
</template>
