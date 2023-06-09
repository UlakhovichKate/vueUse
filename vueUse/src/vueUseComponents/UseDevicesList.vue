<script setup lang="ts">
import { useDevicesList } from '@vueuse/core'

const {
  videoInputs: cameras,
  audioInputs: microphones,
  audioOutputs: speakers,
} = useDevicesList({
  requestPermissions: true,
})
</script>

<template>
  <h2>Use Devices List</h2>
  <div class="grid grid-cols-3" gap="2" p="y-4">
    <div class="title">
      Camera ({{ cameras.length }})
    </div>
    <div class="title">
      Microphones ({{ microphones.length }})
    </div>
    <div class="title">
      Speakers ({{ speakers.length }})
    </div>

    <div>
      <div v-for="i of cameras" :key="i.deviceId" text="sm">
        {{ i.label }}
      </div>
    </div>

    <div>
      <div v-for="i of microphones" :key="i.deviceId" text="sm">
        {{ i.label }}
      </div>
    </div>

    <div>
      <div v-for="i of speakers" :key="i.deviceId" text="sm">
        {{ i.label }}
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.title {
  @apply opacity-50 uppercase tracking-wide text-sm;
}
</style>
