<script setup lang="ts">
import { ref } from 'vue'
import { watchIgnorable } from '@vueuse/core'

const log = ref('')
const source = ref(0)

const { ignoreUpdates } = watchIgnorable(
    source,
    v => (log.value += `Changed to "${v}"\n`),
    { flush: 'sync' },
)

function clear() {
  source.value = 0
  log.value = ''
}
function update() {
  source.value++
}
function ignoredUpdate() {
  ignoreUpdates(() => {
    source.value++
  })
}
</script>

<template>
  <h2>Watch Ignorable</h2>
  <div>Value: {{ source }}</div>
  <button class="btn btn-primary" @click="update">
    Update
  </button>
  <button class="btn btn-danger" @click="ignoredUpdate">
    Ignored Update
  </button>
  <button class="btn btn-primary" @click="clear">
    Reset
  </button>

  <br>

  <p>Log</p>

  <pre>{{ log }}</pre>
</template>
