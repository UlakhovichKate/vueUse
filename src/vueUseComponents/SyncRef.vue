<template>
  <h2>Sync Ref</h2>
  <input v-model="a" placeholder="A" type="text"><br>
  <input v-model="b" placeholder="B" type="text">
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { syncRef } from '@vueuse/core'

const a = ref('')
const b = ref('')

syncRef(a, b)
</script>

<style scoped>

</style>
