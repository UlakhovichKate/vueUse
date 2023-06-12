<script setup lang="ts">
import { reactive } from 'vue'
import { useNetwork } from '@vueuse/core'

const network = reactive(useNetwork())
</script>

<template>
  <h2>Use Network</h2>
  <pre>{{ network }}</pre>
</template>
