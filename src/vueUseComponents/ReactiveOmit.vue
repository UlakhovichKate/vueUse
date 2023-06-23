<template>
  <h2>Reactive Omit</h2>
  <div>obj: {{ obj }}</div>
  <pre>const picked = reactiveOmit(obj, 'x', 'elementX')</pre>
  <div>picked: {{ picked }}</div>
</template>

<script setup>
import { reactiveOmit } from '@vueuse/core'
import {reactive} from "vue";

const obj = reactive({
  x: 0,
  y: 0,
  elementX: 0,
  elementY: 0,
})

const picked = reactiveOmit(obj, 'x', 'elementX') // { y: number, elementY: number }
</script>

<style scoped>

</style>
