<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useToggle } from '@vueuse/shared'
import { useFetch } from '@vueuse/core'

const url = ref('https://httpbin.org/get')
const refetch = ref(false)

const toggleRefetch = useToggle(refetch)

const {
  data,
  error,
  abort,
  statusCode,
  isFetching,
  isFinished,
  canAbort,
  execute,
} = useFetch(url, { refetch }).get()

const text = reactive({
  isFinished,
  isFetching,
  canAbort,
  statusCode,
  error,
  data: computed(() => {
    try {
      return JSON.parse(data.value as string)
    }
    catch (e) {
      return null
    }
  }),
})
</script>

<template>
  <h2>Use Fetch</h2>
  <div>
    <div>
      <p>The following URLs can be used to test different features of useFetch</p>
      <div class="mt-2">
        Normal Request:
        <code>
          https://httpbin.org/get
        </code>
      </div>
      <div>
        Abort Request:
        <code>
          https://httpbin.org/delay/10
        </code>
      </div>
      <div>
        Response Error:
        <code>
          http://httpbin.org/status/500
        </code>
      </div>
    </div>

    <input v-model="url" type="text">
    <button class="btn btn-primary" @click="execute">
      Execute
    </button>
    <button class="btn btn-outline-primary" @click="toggleRefetch">
      <i v-if="refetch" inline-block align-middle i-carbon-checkmark />
      <i v-else inline-block align-middle i-carbon-error />

      <span class="ml-2">{{ refetch ? 'Refetch On' : 'Refetch Off' }}</span>
    </button>
    <button class="btn btn-danger" v-if="canAbort" @click="abort">
      Abort
    </button>
    <div>
      <pre class="code-block">{{ text }}</pre>
    </div>
  </div>
</template>
