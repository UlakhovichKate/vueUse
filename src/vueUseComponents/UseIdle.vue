<script setup lang="ts">
import { computed } from 'vue'
import { useIdle, useTimestamp } from '@vueuse/core'

const { idle, lastActive } = useIdle(5000)

const now = useTimestamp()

const idledFor = computed(() =>
    Math.floor((now.value - lastActive.value) / 1000),
)
</script>

<template>
  <h2>Use Idle</h2>
  <p class="mb-2">
    For demonstration purpose, the idle timeout is set to <b>5s</b> in this
    demo (default 1min).
  </p>
  <div class="mb-2">
    Idle: {{ idle }}
  </div>
  <div>Inactive: <b class="text-primary">{{ idledFor }}s</b></div>
</template>
