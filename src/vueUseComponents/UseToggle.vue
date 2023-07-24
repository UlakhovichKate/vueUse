<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const [value, toggle] = useToggle()
</script>

<template>
  <h2>Use Toggle</h2>
  <div>
    <p>Value: {{ value ? 'ON' : 'OFF' }}</p>
    <button @click="toggle()" class="btn btn-info">
      Toggle
    </button>
    <button @click="value = true" class="btn btn-primary">
      Set ON
    </button>
    <button @click="value = false" class="btn btn-primary">
      Set OFF
    </button>
  </div>
</template>
