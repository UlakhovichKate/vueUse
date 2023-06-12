<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePointerSwipe } from '@vueuse/core'
import type { UseSwipeDirection } from '@vueuse/core'

const target = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)

const containerWidth = computed(() => container.value?.offsetWidth)

const left = ref('0')
const opacity = ref(1)

function reset() {
  left.value = '0'
  opacity.value = 1
}

const { distanceX, isSwiping } = usePointerSwipe(target, {
  onSwipe(e: PointerEvent) {
    if (containerWidth.value) {
      if (distanceX.value < 0) {
        const distance = Math.abs(distanceX.value)
        left.value = `${distance}px`
        opacity.value = 1.25 - distance / containerWidth.value
      }
      else {
        left.value = '0'
        opacity.value = 1
      }
    }
  },
  onSwipeEnd(e: PointerEvent, direction: UseSwipeDirection) {
    if (distanceX.value < 0 && containerWidth.value && (Math.abs(distanceX.value) / containerWidth.value) >= 0.5) {
      left.value = '100%'
      opacity.value = 0
    }
    else {
      left.value = '0'
      opacity.value = 1
    }
  },
})
</script>

<template>
  <h2>Use Pointer Swipe</h2>
  <div ref="container" class="bg-dark rounded position-relative w-full p-5 m-auto d-flex items-center justify-center overflow-hidden">
    <button class="btn btn-secondary" @click="reset">
      Reset
    </button>
    <div
        ref="target"
        class="el-swipe"
        :class="{ 'transition-all duration-200 ease-linear': !isSwiping }"
        :style="{ left, opacity }"
    >
      <p class="d-flex text-white items-center">
        Swipe ->
      </p>
    </div>
  </div>
</template>

<style scoped>
.el-swipe {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rebeccapurple;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
