<script setup lang="ts">
import { ref } from 'vue'
import { useTimeoutFn } from '@vueuse/core'

const defaultText = 'Please wait for 3 seconds'
const text = ref(defaultText)
const { start, isPending } = useTimeoutFn(() => {
  text.value = 'Fired!'
}, 3000)

function restart() {
  text.value = defaultText
  start()
}
</script>

<template>
  <h2>Use Timeout Fn</h2>
  <p>{{ text }}</p>
  <button class="btn btn-danger" :class="{ disabled: isPending }" @click="restart()">
    Restart
  </button>
</template>
