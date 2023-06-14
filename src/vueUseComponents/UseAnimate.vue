<script setup lang="ts">
import { reactive, shallowRef } from 'vue'
import { useAnimate } from '@vueuse/core'
import type { MaybeElement } from '@vueuse/core'

const el = shallowRef<MaybeElement>()

const {
  play,
  pause,
  reverse,
  finish,
  cancel,
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
} = useAnimate(
    el,
    [
      { clipPath: 'circle(20% at 0% 30%)' },
      { clipPath: 'circle(20% at 50% 80%)' },
      { clipPath: 'circle(20% at 100% 30%)' },
    ],
    {
      duration: 3000,
      iterations: 5,
      direction: 'alternate',
      easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
    },
)

const text = reactive({
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
})
</script>

<template>
  <h2>Use Animate</h2>
  <div>
    <div class="flex items-center justify-center w-full h-60">
      <p ref="el" class="animate-text">
        VueUse useAnimate
      </p>
    </div>
    <div>
      <button class="btn btn-danger" v-if="playState === 'running'" @click="pause">
        pause
      </button>
      <button class="btn btn-danger" v-else @click="play">
        play
      </button>
      <button class="btn btn-danger" @click="reverse">
        reverse
      </button>
      <button class="btn btn-danger" @click="finish">
        finish
      </button>
      <button class="btn btn-danger" @click="cancel">
        cancel
      </button>
    </div>
    <pre class="code-block">{{ text }}</pre>
  </div>
</template>

<style>
.animate-text {
  font-size: 40px;
  font-weight: 700;
  color: green;
}
</style>
