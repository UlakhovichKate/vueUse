<script setup lang="ts">
    import { ref } from 'vue'
    import { useDraggable } from '@vueuse/core'

    const el = ref<HTMLElement | null>(null)

    // `style` will be a helper computed for `left: ?px; top: ?px;`
    const { x, y, style } = useDraggable(el, {
        initialValue: { x: 700, y: 500 },
    })
</script>

<template>
    <h2>Use Draggable</h2>
    <div ref="el" :style="style" style="position: fixed">
        Drag me! I am at {{x}}, {{y}}
    </div>
</template>