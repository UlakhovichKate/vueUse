<template>
  <h2>Use Intervel Fn</h2>
  <div>{{ el }}</div>
  <button v-if="isActive" class="btn btn-danger" @click="pause">
    Pause
  </button>
  <button v-if="!isActive" @click="resume"  class="btn btn-danger">
    Resume
  </button>
</template>

<script setup>
import {rand, useIntervalFn} from '@vueuse/core'
import {ref} from "vue";

let arr = ['apple', 'grapes', 'orange', 'watermelon']
const el = ref('');

const { pause, resume, isActive } = useIntervalFn(() => {
  el.value = arr[rand(0, arr.length - 1)]
}, 1000)
</script>

<style scoped>

</style>
