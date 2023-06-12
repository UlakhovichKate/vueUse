<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'
import { useScroll } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const smooth = ref(false)
const behavior = computed(() => smooth.value ? 'smooth' : 'auto')
const { x, y, isScrolling, arrivedState, directions } = useScroll(el, { behavior })
const { left, right, top, bottom } = toRefs(arrivedState)
const { left: toLeft, right: toRight, top: toTop, bottom: toBottom } = toRefs(directions)

// Format the numbers with toFixed() to make them
// nicer to display
const displayX = computed({
  get() {
    return x.value.toFixed(1)
  },
  set(val) {
    x.value = parseFloat(val)
  },
})
const displayY = computed({
  get() {
    return y.value.toFixed(1)
  },
  set(val) {
    y.value = parseFloat(val)
  },
})
</script>

<template>
  <h2>Use Scroll</h2>
  <div class="d-flex">
    <div ref="el" class="scroll-container m-auto overflow-scroll bg-light rounded">
      <div class="scroll-block position-relative">
        <div class="position-absolute left-0 top-0 bg-danger">
          TopLeft
        </div>
        <div class="position-absolute left-0 top-100 bg-danger">
          BottomLeft
        </div>
        <div class="position-absolute scroll-el bg-danger">
          Scroll Me
        </div>
      </div>
    </div>
    <div class="m-auto w-280px pl-4">
      <div class="px-6 py-4 rounded grid grid-cols-[120px_auto] gap-2 bg-gray-500/5">
        <span text="right" opacity="75" class="py-4">X Position</span>
        <div class="text-primary">
          <div>
            <input v-model="displayX" type="number" min="0" max="200" step="10" class="w-full !min-w-0">
          </div>
        </div>
        <span text="right" opacity="75" class="py-4">Y Position</span>
        <div class="text-primary">
          <div>
            <input v-model="displayY" type="number" min="0" max="100" step="10" class="w-full !min-w-0">
          </div>
        </div>
        <label for="smooth-scrolling-option" text="right" opacity="75">Smooth scrolling</label>
        <span><input id="smooth-scrolling-option" v-model="smooth" type="checkbox"></span><br>
        <span text="right" opacity="75">isScrolling</span>
        {{ isScrolling }}
        <div text="right" opacity="75">
          Top Arrived
        </div>
        {{ top }}
        <div text="right" opacity="75">
          Right Arrived
        </div>
        {{ right }}
        <div text="right" opacity="75">
          Bottom Arrived
        </div>
        {{ bottom }}
        <div text="right" opacity="75">
          Left Arrived
        </div>
        {{ left }}
        <div text="right" opacity="75">
          Scrolling Up
        </div>
        {{ toTop }}
        <div text="right" opacity="75">
          Scrolling Right
        </div>
        {{ toRight }}
        <div text="right" opacity="75">
          Scrolling Down
        </div>
        {{ toBottom }}
        <div text="right" opacity="75">
          Scrolling Left
        </div>
        {{ toLeft }}
      </div>
    </div>
  </div>
</template>

<style>
.scroll-container {
  width: 200px;
}

.scroll-block {
  width: 300px;
  height: 300px;
}

.scroll-el {
  right: 0;
  top: 50%;
}
</style>
