<script setup lang="ts">
import { invoke, until, useCounter } from '@vueuse/shared'

const { count, inc, dec } = useCounter()

invoke(async () => {
  await until(count).toBe(7)

  alert('You got 7!')
})
</script>

<template>
  <h2>Until</h2>
  <p>Add to 7 to show the alert.</p>
  <p>Count: {{ count }}</p>
  <button class="btn btn-primary" @click="inc()">
    Increment
  </button>
  <button class="btn btn-primary" @click="dec()">
    Decrement
  </button>
</template>
