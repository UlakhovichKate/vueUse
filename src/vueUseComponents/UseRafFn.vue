<template>
  <h2>Use Raf Fn</h2>
  <div>{{ count }}</div>
  <button type="button" class="btn btn-danger" @click="pause">Pause</button>
  <button type="button" class="btn btn-danger" @click="resume">Resume</button>
</template>

<script setup>
import { ref } from 'vue'
import { useRafFn } from '@vueuse/core'

const count = ref(0)

const { pause, resume } = useRafFn(() => {
  count.value++
})
</script>

<style scoped>

</style>
