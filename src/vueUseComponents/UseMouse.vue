<script setup lang="ts">
import {reactive, ref} from 'vue'
import { useMouse, useParentElement } from '@vueuse/core'
import type { UseMouseEventExtractor } from '@vueuse/core'

const tooltip = ref<HTMLElement | undefined>()
const parentEl = useParentElement(tooltip)

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
  <div class="bg-light w-50">
    <p>Basic Usage</p>
    <pre>{{ mouseDefault }}</pre>
    <div ref="tooltip" class="extractor">
      <p>Extractor Usage</p>
      <pre>{{ mouseWithExtractor }}</pre>
    </div>
  </div>
</template>
