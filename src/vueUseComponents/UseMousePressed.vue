<script setup lang="ts">
import { useToggle } from '@vueuse/shared'
import { computed, reactive, ref } from 'vue'
import { useMousePressed } from '@vueuse/core'

const el = ref<HTMLElement | null>()
const [withTarget, toggle] = useToggle()
const target = computed<HTMLElement | null>(() =>
    (withTarget.value ? el.value : window) as HTMLElement,
)

const mouse = reactive(useMousePressed({ target }))

</script>

<template>
  <h2>Use Mouse Pressed</h2>
  <div ref="el" class="select-none bg-light">
    <pre>{{ mouse }}</pre>
    <div>
      Tracking on
      <button class="ml-2 btn btn-danger" @click="toggle()">
        {{ withTarget ? 'Demo section' : 'Entire page' }}
      </button>
    </div>
  </div>
</template>
