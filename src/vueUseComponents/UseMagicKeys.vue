<template>
  <h2>Use Magic keys</h2>
  <div>{{ current }}</div>
</template>

<script setup>
import { useMagicKeys, whenever } from '@vueuse/core'
import { watch, watchEffect } from "vue";

const { current } = useMagicKeys()

whenever(
    () => current.has('a') && !current.has('b'),
    () => console.log('A is pressed but not B'),
)

const { shift, space, a /* keys you want to monitor */ } = useMagicKeys()

watch(space, (v) => {
  if (v)
    console.log('space has been pressed')
})

watchEffect(() => {
  if (shift.value && a.value)
    console.log('Shift + A have been pressed')
})
</script>

<style scoped>

</style>
