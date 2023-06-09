<template>
  <h2>Use Clipboard</h2>
  <div v-if="isSupported">
    <input v-model="input" type="text">
    <button @click='copy(input)'>
      <!-- by default, `copied` will be reset in 1.5s -->
      <span v-if='!copied'>Copy</span>
      <span v-else>Copied!</span>
    </button>
    <p>
      Current copied: <code>{{ text || 'none' }}</code>
    </p>
  </div>
  <p v-else>
    Your browser does not support Clipboard API
  </p>
</template>

<script setup>
import { useClipboard } from '@vueuse/core'
import {ref} from "@vue/reactivity";

const { text, copy, copied, isSupported } = useClipboard()
const input = ref('');
</script>

<style scoped>

</style>
