<template>
  <h2>Use vibrate</h2>
  <div>
    <p>Is Supported: {{ supported }}</p>
    <button type="button" class="btn btn-primary" @click="startVibrate">Start vibration</button>
    <button type="button" class="btn btn-outline-primary" @click="stopVibrate">Stop vibration</button>
  </div>
</template>

<script setup>
import { useVibrate } from '@vueuse/core'
import {ref} from "vue";

// This vibrates the device for 300 ms
// then pauses for 100 ms before vibrating the device again for another 300 ms:
const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] })

const supported = ref(isSupported.value)

// Start the vibration, it will automatically stop when the pattern is complete:
function startVibrate() {
  vibrate()
}

// But if you want to stop it, you can:
function stopVibrate() {
  stop()
}

</script>

<style scoped>

</style>
