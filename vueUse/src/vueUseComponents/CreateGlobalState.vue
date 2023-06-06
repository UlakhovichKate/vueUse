<template>
    <h2>create global state</h2>
    <div>
        <input v-model="state.name" type="text">
        <input v-model="state.color" type="text">
        <input v-model="state.size" type="text">

        <pre>{{ text }} </pre>
  </div>
</template>

<script setup lang="ts">
    import { createGlobalState, useStorage } from '@vueuse/core'

    const useState = createGlobalState(() =>
        useStorage('vue-use-locale-storage', {
            name: 'Banana',
            color: 'Yellow',
            size: 'Medium',
        }),
    );

    const state = useState();
    const text = state
</script>
