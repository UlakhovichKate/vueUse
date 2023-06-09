<template>
  <div>
    <h2>Use Element Bounding</h2>
    <div class="mb-2">
      Resize the box to see changes
    </div>
    <textarea ref="el" readonly class="resizer">
      {{ x }} - {{ y }}
      {{ width }} - {{ height }}
    </textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useElementBounding } from '@vueuse/core'

const el = ref(null)
const { x, y, top, right, bottom, left, width, height } = useElementBounding(el)
</script>

<style>
.resizer {
  resize: both;
  width: 300px;
  min-height: 100px;
}
</style>
