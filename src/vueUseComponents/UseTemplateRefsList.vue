<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { useTemplateRefsList } from '@vueuse/core'

const count = ref(5)
const refs = useTemplateRefsList<HTMLDivElement>()

watch(refs, async () => {
  await nextTick()
  console.log([...refs.value])
}, {
  deep: true,
  flush: 'post',
})
</script>

<template>
  <h2>Use Template Refs List</h2>
  <span v-for="i of count" :key="i" :ref="refs.set" class="mr-2">
    {{ i }}
  </span>
  <br>
  <button @click="count += 1" class="btn btn-info">
    Inc
  </button>
  <button :disabled="count <= 0" @click="count -= 1" class="btn btn-info mx-2">
    Dec
  </button>
  <p>Open the console to see the output</p>
</template>
