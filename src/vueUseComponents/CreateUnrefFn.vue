<template>
  <h2>Create Unref Fn</h2>
  {{ result }}
</template>

<script setup>
import { ref } from 'vue'
import { createUnrefFn } from '@vueuse/core'

const url = ref('https://httpbin.org/post')
const data = ref({ foo: 'bar' })
const result = ref('');

function post(url, data) {
  return fetch(url, { data })
}
const unrefPost = createUnrefFn(post)

post(url, data) /* ❌ Will throw an error because the arguments are refs */
result.value = unrefPost(url, data) /* ✔️ Will Work because the arguments will be auto unref */

</script>

<style scoped>

</style>
