<template>
  <h2>Use Script Tag</h2>
  <p>(console.log + content.value.appendChild(el);)</p>
  <div ref="content"></div>
</template>

<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
import {ref} from "vue";

const content = ref(null);

useScriptTag(
    'https://player.twitch.tv/js/embed/v1.js',
    // on script tag loaded.
    (el: HTMLScriptElement) => {
      console.log(el)
      content.value.appendChild(el);
    },
)
</script>

<style scoped>

</style>
