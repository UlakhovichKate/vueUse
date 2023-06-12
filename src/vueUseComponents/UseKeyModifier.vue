<template>
  <h2>Use Key Modifier</h2>
  <p :class="[capsLockState ? 'active' : 'none']">capsLockState: {{ capsLockState }}</p>
  <p :class="[altState ? 'active' : 'none']">altState: {{ altState }}</p>
  <p :class="[controlState ? 'active' : 'none']">controlState: {{ controlState }}</p>
  <p :class="[fnState ? 'active' : 'none']">fnState: {{ fnState }}</p>
  <p :class="[fnLockState ? 'active' : 'none']">fnLockState: {{ fnLockState }}</p>
  <p :class="[numLockState ? 'active' : 'none']">numLockState: {{ numLockState }}</p>
  <p :class="[shiftState ? 'active' : 'none']">shiftState: {{ shiftState }}</p>
  <p :class="[scrollLock ? 'active' : 'none']">scrollLock: {{ scrollLock }}</p>
</template>

<script setup>
import { useKeyModifier } from '@vueuse/core'

const capsLockState = useKeyModifier('CapsLock')
const altState = useKeyModifier('Alt')
const controlState = useKeyModifier('Control')
const fnState = useKeyModifier('Fn')
const fnLockState = useKeyModifier('FnLock')
const numLockState = useKeyModifier('NumLock')
const shiftState = useKeyModifier('Shift')
const scrollLock = useKeyModifier('ScrollLock')

</script>

<style scoped>
  .active {
    color: red;
  }
</style>
