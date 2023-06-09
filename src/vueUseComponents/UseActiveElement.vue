<template>
    <h2>Use Active Element</h2>
    <div>
        <input
                v-for="i in 6"
                :key="i"
                type="text"
                :data-id="i"
                class="!my-0 !min-w-0"
                :placeholder="`${i}`"
        >
    </div>
    <div class="mt-2">
        Current Active Element:
        <span class="text-primary">{{ key }}</span>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { useActiveElement } from '@vueuse/core'

    const activeElement = useActiveElement()
    const key = computed(() => activeElement.value?.dataset?.id || 'null')
</script>

<style scoped>

</style>