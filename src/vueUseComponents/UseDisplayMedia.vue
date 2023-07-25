<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useDisplayMedia } from '@vueuse/core'

const video = ref<HTMLVideoElement>()
const { stream, enabled } = useDisplayMedia()

watchEffect(() => {
  if (video.value)
    video.value.srcObject = stream.value!
})
</script>

<template>
  <h2>Use Display Media</h2>
  <button class="btn btn-primary mb-3" @click="enabled = !enabled">
    {{ enabled ? 'Stop' : 'Start' }} sharing my screen
  </button>
  <div>
    <video
        ref="video"
        muted
        autoplay
        controls
        class="h-100 w-75"
    />
  </div>
</template>
