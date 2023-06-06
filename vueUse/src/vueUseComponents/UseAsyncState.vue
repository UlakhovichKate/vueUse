<template>
    <h2>Use Async State</h2>
    <div>
        <div>Ready: {{ isReady.toString() }}</div>
        <div>Loading: {{ isLoading.toString() }}</div>
        <pre>{{ state }}</pre>
        <button @click="execute(2000, { id: 3 })">
            Execute
        </button>
    </div>
</template>

<script  setup lang="ts">
  import axios from 'axios'
  import { useAsyncState } from '@vueuse/core'

  const { isLoading, state, isReady, execute } = useAsyncState(
    (args) => {
      const id = args?.id || 1
      return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(t => t.data)
    },
    {},
    {
      delay: 2000,
      resetOnExecute: false,
    },
  )
</script>

<style scoped>

</style>