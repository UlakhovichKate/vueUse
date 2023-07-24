<script setup lang="ts">
import { ref } from 'vue'
import { useThrottleFn } from '@vueuse/core'

const updated = ref(0)
const clicked = ref(0)
const throttledFn = useThrottleFn(() => {
  updated.value += 1
}, 1000)

function clickedFn() {
  clicked.value += 1
  throttledFn()
}
</script>

<template>
  <h2>Use Throttle Fn</h2>
  <div>
    <button @click="clickedFn" class="btn btn-danger">
      Smash me!
    </button>
    <p>Delay is set to 1000ms for this demo.</p>

    <p>Button clicked: {{ clicked }}</p>
    <p>Event handler called: {{ updated }}</p>
  </div>
</template>
