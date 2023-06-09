<script setup>
import {computed, ref} from 'vue'
import { useGamepad } from '@vueuse/core'

const { isSupported, gamepads } = useGamepad()
const gamepad = ref(null)

if (gamepads.length > 0) {
  gamepad.value = computed(() => gamepads.find(g => g.mapping === 'standard'))
}
</script>

<template>
  <h2>Use Gamepad</h2>
  <div>isSupported: {{ isSupported }}</div>
  <div v-if="gamepads.length === 0">
    No gamepads detected
  </div>
  <div v-else>
    {{ gamepad }}
  </div>
</template>
