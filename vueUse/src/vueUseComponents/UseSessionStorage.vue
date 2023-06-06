<template>
    <h2>Use Session Storage</h2>
    <div>
        <input v-model="state.name" type="text">
        <input v-model="state.color" type="text">
        <input v-model="state.size" type="text">
        <input v-model.number="state.count" type="range" min="0" step="0.01" max="1000">

        <pre>{{ text }}</pre>
  </div>
</template>

<script setup lang="ts">
    import { useSessionStorage } from '@vueuse/core'

    const theDefault = {
        name: 'Banana',
        color: 'Yellow',
        size: 'Medium',
        count: 0,
    }
    const state = useSessionStorage('vue-use-s-storage', theDefault)
    const state2 = useSessionStorage('vue-use-s-storage', theDefault)

    const text = state2
</script>
