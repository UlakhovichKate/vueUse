<template>
  <textarea ref="el" class="resizer">
    Height: {{ height }}
    Width: {{ width }}
  </textarea>
</template>

<script setup>
import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const el = ref(null)
const { width, height } = useElementSize(el)


</script>
<style>
.resizer {
  resize: both;
  width: 300px;
  min-height: 100px;
}
</style>
