<template>
  <h2>Use Parent Element</h2>
  <div>
    <pre>
      {{ parentEl }}
    </pre>
  </div>
</template>

<script setup>
import { useParentElement } from '@vueuse/core'
import {onMounted} from "@vue/runtime-core";

const parentEl = useParentElement()

onMounted(() => {
  console.log(parentEl.value)
})

</script>

<style scoped>

</style>
