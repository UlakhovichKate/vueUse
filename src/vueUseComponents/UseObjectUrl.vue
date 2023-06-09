<script setup>
import { useObjectUrl } from '@vueuse/core'
import { shallowRef } from 'vue'

const file = shallowRef()
const url = useObjectUrl(file)

const onFileChange = (event) => {
  file.value = event.target.files[0]
}
</script>

<template>
  <h2>Use Object Url</h2>
  <div>
    <input type="file" @change="onFileChange" />

    <a :href="url">Open file</a>
    <code>
      <a v-if="url" :href="url" target="_blank">{{ url }}</a>
      <span v-else>none</span>
    </code>
  </div>

</template>
