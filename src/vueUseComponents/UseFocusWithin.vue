<script setup lang="ts">
import { ref } from 'vue'
import { useFocusWithin } from '@vueuse/core'

const target = ref()

const { focused } = useFocusWithin(target)
</script>

<template>
  <h2>Use Focus Within</h2>
  <div>
    <form
        ref="target"
        class="row shadow bg-light border-main rounded max-w-96 mx-auto p-5"
    >
      <input type="text" placeholder="First Name">
      <input type="text" placeholder="Last Name">
      <input type="text" placeholder="Email">
      <input type="text" placeholder="Password">
    </form>
    <div mt2>
      Focus in form: {{ focused }}
    </div>
  </div>
</template>
