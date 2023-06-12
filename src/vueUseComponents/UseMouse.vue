<script setup lang="ts">
import { reactive } from 'vue'
import { useMouse, useParentElement } from '@vueuse/core'
import type { UseMouseEventExtractor } from '@vueuse/core'

const parentEl = useParentElement()

const mouseDefault = reactive(useMouse())

const extractor: UseMouseEventExtractor = event => (
    event instanceof Touch
        ? null
        : [event.offsetX, event.offsetY]
)

const mouseWithExtractor = reactive(useMouse({ target: parentEl, type: extractor }))
</script>

<template>
  <h2>Use Mouse</h2>
  <p>Basic Usage</p>
  <pre>{{ mouseDefault }}</pre>
  <p>Extractor Usage</p>
  <pre>{{ mouseWithExtractor }}</pre>
</template>
