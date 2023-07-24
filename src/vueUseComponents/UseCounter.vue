<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const { count, inc, dec, set, reset } = useCounter()
</script>

<template>
  <h2>Use Counter</h2>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="inc()" class="btn btn-primary">
      Increment
    </button>
    <button @click="dec()" class="btn btn-outline-primary">
      Decrement
    </button>
    <button @click="inc(5)" class="btn btn-primary">
      Increment (+5)
    </button>
    <button @click="dec(5)" class="btn btn-outline-primary">
      Decrement (-5)
    </button>
    <button @click="set(100)" class="btn btn-primary">
      Set (100)
    </button>
    <button @click="reset()" class="btn btn-danger">
      Reset
    </button>
  </div>
</template>
