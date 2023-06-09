<script setup lang="ts">
import { useProvideCounterStore } from '../composables/useCounterStore.ts'

useProvideCounterStore(0)
</script>

<template>
  <div>
    <slot />
  </div>
</template>
