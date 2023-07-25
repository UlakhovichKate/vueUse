<template>
  <h2>Watch At Most</h2>
  <p>{{ source }}</p>
  <button class="btn btn-primary" @click="source++">Increase</button>
  <p>Look at console.log (triggered it at most 3 times)</p>
</template>

<script setup>
import { watchAtMost } from '@vueuse/core'
import {ref} from "vue";

const source = ref(0);

watchAtMost(
    source,
    () => { console.log('trigger!') }, // triggered it at most 3 times
    {
      count: 3, // the number of times triggered
    },
)
</script>

<style scoped>

</style>
