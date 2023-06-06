<script setup lang="ts">
    import { useProvideCounterStore } from './../composables/useCounterStore'

    useProvideCounterStore(0)
</script>

<template>
    <div>
        <slot />
    </div>
</template>