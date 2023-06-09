<script setup lang="ts">
import { useTitle } from '@vueuse/core'

const title = useTitle('useTitle | VueUse')
</script>

<template>
  <h2>Use Title</h2>
  <p>Title</p>
  <input v-model="title" type="text">
</template>
