<template>
  <h2>Use Full Screen</h2>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe  ref='el' class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
  </div>

  <button class="btn btn-primary" @click="toggle">
    Go Fullscreen
  </button>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'

const el = ref(null);

const { isFullscreen, enter, exit, toggle } = useFullscreen(el)
</script>

<style scoped>

</style>
