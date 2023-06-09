<script setup lang="ts">
import { ref } from 'vue'
import { useMutationObserver } from '@vueuse/core'

const el = ref(null)
const messages = ref<string[]>([])
const className = ref({})
const style = ref({})

useMutationObserver(
    el,
    (mutations) => {
      const mutation = mutations[0]

      if (!mutation)
        return

      messages.value.push(mutation.attributeName!)
    },
    { attributes: true },
)

setTimeout(() => {
  className.value = {
    test: true,
    test2: true,
  }
}, 10000)

setTimeout(() => {
  style.value = {
    color: 'red',
  }
}, 20550)
</script>

<template>
  <h2>Use Mutation Observer</h2>
  <div>
    <div ref="el" :class="className" :style="style">
      <div v-for="(text, index) of messages" :key="index">
        Mutation Attribute: {{ text }}
      </div>
    </div>
  </div>
</template>
