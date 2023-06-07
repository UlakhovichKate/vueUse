<template>
  <h2>Use Mouse Element</h2>
  <div ref="target">
    <h1 class="bg-info">Hello world</h1>
  </div>
  <pre>
    elementX: {{ elementX }}
    elementY: {{ elementY }}
    x: {{ x }}
    y: {{ y }}
    Is Outside: {{ isOutside }}
    elementPositionX: {{ elementPositionX }}
    elementPositionY: {{ elementPositionY }}
    elementHeight: {{ elementHeight }}
    elementWidth: {{ elementWidth }}
  </pre>

</template>

<script setup>
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)

const { x, y, elementX, elementY, isOutside, elementPositionX, elementPositionY, elementHeight, elementWidth } = useMouseInElement(target)

</script>
