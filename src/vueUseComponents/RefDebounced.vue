<script setup lang="ts">
import { ref, watch } from 'vue'
import { refDebounced } from '@vueuse/core'

const input = ref('')
const debounced = refDebounced(input, 1000)
const updated = ref(0)

watch(debounced, () => (updated.value += 1))
</script>

<template>
  <h2>Ref Debounced</h2>
  <div>
    <input v-model="input" placeholder="Try to type anything..." type="text">
    <p>Delay is set to 1000ms for this demo.</p>

    <p>Debounced: {{ debounced }}</p>
    <p>Times Updated: {{ updated }}</p>
  </div>
</template>
