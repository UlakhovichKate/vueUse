<script lang="ts" setup>
import {computed, reactive, ref} from 'vue'
import { useElementBounding, useElementByPoint, useEventListener, useMouse } from '@vueuse/core'

const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
const bounding = reactive(useElementBounding(element))

const pointOn = ref(false);
if (pointOn) {
  useEventListener('scroll', bounding.update, true)
}

const boxStyles = computed(() => {
  if (element.value && pointOn.value) {
    return {
      display: 'block',
      width: `${bounding.width}px`,
      height: `${bounding.height}px`,
      left: `${bounding.left}px`,
      top: `${bounding.top}px`,
      backgroundColor: '#3eaf7c44',
      transition: 'all 0.05s linear',
    } as Record<string, string | number>
  }
  return {
    display: 'none',
  }
})

const pointStyles = computed(() => {
  if (pointOn.value) {
    return {
      transform: `translate(calc(${x.value}px - 50%), calc(${y.value}px - 50%))`
    } as Record<string, string | number>
  }
  return {
    display: 'none',
  }
})

</script>

<template>
  <h2>Use Element By Point</h2>

  <pre>{{ element }}</pre>
  <label>
    Switch on Point
    <input type="checkbox" v-model="pointOn">
  </label>

  <div
      :style="boxStyles"
      class="box-styles"
  />
  <div
      :style="pointStyles"
      class="point"
  />
  <div class="flex items-center">
    <span class="mr-4">X</span>
    <input v-model="x" type="number">
  </div>
  <div class="flex items-center">
    <span class="mr-4">Y</span>
    <input v-model="y" type="number">
  </div>
</template>

<style>
.box-styles {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border: 1px solid green;
}

.point {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
  box-shadow: 2px 2px 2px 2px #cccccc;
  z-index: 999;
}
</style>
