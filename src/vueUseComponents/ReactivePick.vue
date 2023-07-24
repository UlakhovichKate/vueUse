<template>
  <h2>Reactive Pick</h2>
  {{ picked }}
</template>

<script setup>
import { reactivePick } from '@vueuse/core'
import {reactive} from "vue";

const obj = reactive({
  x: 0,
  y: 0,
  elementX: 0,
  elementY: 0,
})

const picked = reactivePick(obj, 'x', 'elementX') // { x: number, elementX: number }
</script>

<style scoped>

</style>
