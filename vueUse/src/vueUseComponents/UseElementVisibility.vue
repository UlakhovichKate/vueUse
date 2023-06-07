<template>
  <h2>Use Element Visibility</h2>
  <div>
    <note class="mb-2">
      Info on the right bottom corner
    </note>
    <div ref="el" class="max-w-100 relative area bg-white dark:bg-gray-800 shadow-lg z-60">
      Target Element (scroll down)
    </div>
  </div>
  <div class="float m-3 area shadow-lg block-visibility">
    Element
    {{ isVisible ? 'inside' : 'outside' }}
    the viewport
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const el = ref(null)
const isVisible = useElementVisibility(el)
</script>

<style>
.block-visibility {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
</style>
