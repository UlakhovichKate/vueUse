<template>
  <h2>Use Media Controls</h2>
  <video width="320" height="240" controls ref="video"></video><br>
  <button class="btn btn-primary" @click="playBtn(controls.playing)">Play / Pause</button>
  <span>{{ controls.currentTime }} / {{ controls.duration }}</span>
  <pre>{{ controls }}</pre>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import { useMediaControls } from '@vueuse/core'

const video = ref()

const controls = useMediaControls(video, {
  src: 'file_example_rabit.mp4',
})

const text = reactive(controls)

function playBtn(status) {
  status.value = !status.value;
}
</script>

